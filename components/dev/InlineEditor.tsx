'use client'

/**
 * DEV-ONLY redigering af tekster direkte på siden.
 * Åbn fx http://localhost:3000/da?edit=1 (eller brug knappen nederst til venstre).
 * Klik på en tekst, ret den, og tryk Enter eller klik udenfor for at gemme i messages/da.json.
 */
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocale, useMessages } from 'next-intl'

type Json = string | number | boolean | null | Json[] | { [k: string]: Json }

const norm = (s: string) => s.replace(/\s+/g, ' ').trim()

function index(node: Json, trail: string[], out: Map<string, string[][]>) {
  if (typeof node === 'string') {
    const key = norm(node)
    if (key) out.set(key, [...(out.get(key) ?? []), trail])
  } else if (Array.isArray(node)) {
    node.forEach((v, i) => index(v, [...trail, String(i)], out))
  } else if (node && typeof node === 'object') {
    Object.entries(node).forEach(([k, v]) => index(v, [...trail, k], out))
  }
}

export default function InlineEditor() {
  const locale = useLocale()
  const messages = useMessages()
  const lookup = useMemo(() => {
    const m = new Map<string, string[][]>()
    index(messages as unknown as Json, [], m)
    return m
  }, [messages])

  const [on, setOn] = useState(false)
  const [status, setStatus] = useState('')
  const lookupRef = useRef(lookup)
  lookupRef.current = lookup

  useEffect(() => {
    setOn(new URLSearchParams(window.location.search).get('edit') === '1')
  }, [])

  useEffect(() => {
    if (!on || locale !== 'da') return
    document.body.classList.add('dt-edit')

    const findTarget = (start: EventTarget | null): HTMLElement | null => {
      let el = start instanceof HTMLElement ? start : null
      while (el && el !== document.body) {
        if (el.dataset.dtUi) return null
        const text = norm(el.textContent ?? '')
        if (text && lookupRef.current.has(text)) return el
        el = el.parentElement
      }
      return null
    }

    // Bind to the innermost element whose full text equals a message value.
    const deepest = (el: HTMLElement): HTMLElement => {
      const text = norm(el.textContent ?? '')
      for (const child of Array.from(el.children)) {
        if (child instanceof HTMLElement && norm(child.textContent ?? '') === text) return deepest(child)
      }
      return el
    }

    let hovered: HTMLElement | null = null
    const over = (e: MouseEvent) => {
      const t = findTarget(e.target)
      const el = t ? deepest(t) : null
      if (hovered && hovered !== el) hovered.classList.remove('dt-hover')
      hovered = el
      el?.classList.add('dt-hover')
    }

    const save = async (el: HTMLElement, original: string) => {
      const next = norm(el.textContent ?? '')
      el.removeAttribute('contenteditable')
      el.classList.remove('dt-active')
      if (!next || next === original) return
      const paths = lookupRef.current.get(original)
      if (!paths) return
      setStatus('Gemmer…')
      try {
        const res = await fetch('/api/dev/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paths, value: next }),
        })
        if (!res.ok) throw new Error((await res.json()).error ?? res.statusText)
        setStatus(`Gemt (${paths.length} sted${paths.length > 1 ? 'er' : ''})`)
      } catch (err) {
        setStatus(`Fejl: ${(err as Error).message}`)
      }
      setTimeout(() => setStatus(''), 2500)
    }

    const click = (e: MouseEvent) => {
      const t = findTarget(e.target)
      if (!t) return
      const el = deepest(t)
      if (el.isContentEditable) return
      e.preventDefault()
      e.stopPropagation()
      const original = norm(el.textContent ?? '')
      el.setAttribute('contenteditable', 'plaintext-only')
      el.classList.add('dt-active')
      el.focus()
      const onKey = (k: KeyboardEvent) => {
        if (k.key === 'Enter' && !k.shiftKey) {
          k.preventDefault()
          el.blur()
        } else if (k.key === 'Escape') {
          el.textContent = original
          el.blur()
        }
      }
      el.addEventListener('keydown', onKey)
      el.addEventListener(
        'blur',
        () => {
          el.removeEventListener('keydown', onKey)
          void save(el, original)
        },
        { once: true }
      )
    }

    document.addEventListener('mouseover', over)
    document.addEventListener('click', click, true)
    return () => {
      document.body.classList.remove('dt-edit')
      document.removeEventListener('mouseover', over)
      document.removeEventListener('click', click, true)
      hovered?.classList.remove('dt-hover')
    }
  }, [on, locale])

  return (
    <>
      <style>{`
        body.dt-edit, body.dt-edit * { cursor: auto !important; }
        body.dt-edit .dt-hover { outline: 2px dashed #e11d48; outline-offset: 3px; cursor: text !important; }
        body.dt-edit .dt-active { outline: 2px solid #e11d48; outline-offset: 3px; background: rgba(225,29,72,.08); }
      `}</style>
      <div
        data-dt-ui="1"
        style={{ position: 'fixed', left: 12, bottom: 12, zIndex: 2147483647, font: '13px/1.2 system-ui', display: 'flex', gap: 8, alignItems: 'center' }}
      >
        <button
          onClick={() => setOn((v) => !v)}
          style={{ padding: '8px 12px', borderRadius: 999, border: 0, background: on ? '#e11d48' : '#111', color: '#fff', cursor: 'pointer' }}
        >
          {locale !== 'da' ? 'Kun dansk' : on ? '✎ Redigerer – klik på tekst' : '✎ Rediger tekster'}
        </button>
        {status && <span style={{ background: '#111', color: '#fff', padding: '6px 10px', borderRadius: 8 }}>{status}</span>}
      </div>
    </>
  )
}
