import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

// DEV-ONLY: skriver tekstrettelser fra InlineEditor ind i messages/da.json.
// Returnerer 404 i alle andre miljøer end `next dev`.
const FILE = path.join(process.cwd(), 'messages', 'da.json')

type Json = string | number | boolean | null | Json[] | { [k: string]: Json }

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return new NextResponse('Not found', { status: 404 })
  }

  const { paths, value } = (await request.json()) as { paths?: string[][]; value?: string }
  if (!Array.isArray(paths) || paths.length === 0 || typeof value !== 'string') {
    return NextResponse.json({ error: 'Ugyldigt input' }, { status: 400 })
  }

  const data = JSON.parse(await fs.readFile(FILE, 'utf8')) as Json

  for (const p of paths) {
    let node: Json = data
    for (const key of p.slice(0, -1)) {
      if (node === null || typeof node !== 'object') return NextResponse.json({ error: 'Ukendt sti' }, { status: 400 })
      node = (node as Record<string, Json>)[key]
    }
    const last = p[p.length - 1]
    if (node === null || typeof node !== 'object' || typeof (node as Record<string, Json>)[last] !== 'string') {
      return NextResponse.json({ error: `Ukendt tekst: ${p.join('.')}` }, { status: 400 })
    }
    ;(node as Record<string, Json>)[last] = value
  }

  await fs.writeFile(FILE, JSON.stringify(data, null, 2) + '\n', 'utf8')
  return NextResponse.json({ ok: true, updated: paths.length })
}
