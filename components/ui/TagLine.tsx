// Badges med dobbelt ramme: tynd sort yderst, tynd guld inderst – som et stempel.
// Bruges overalt, hvor vi viser korte labels, så udtrykket er ens.
export function TagLine({
  items,
  highlight = [],
  tone = 'dark',
  size = 'sm',
  className = '',
}: {
  items: string[]
  /** Labels der skal stå i guld (fx "Personligt site") */
  highlight?: string[]
  tone?: 'dark' | 'light'
  size?: 'sm' | 'md'
  className?: string
}) {
  const outer = tone === 'dark' ? 'border-black/70' : 'border-white/60'
  const text = tone === 'dark' ? 'text-black/80' : 'text-white/85'
  const hl = tone === 'dark' ? 'text-gold-dark' : 'text-gold'
  const fontSize = size === 'md' ? 'text-[11px] md:text-xs' : 'text-[10px] md:text-[11px]'
  const pad = size === 'md' ? 'px-3.5 py-2' : 'px-3 py-1.5'

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`border ${outer} p-[3px]`}>
          <span
            className={`block border border-gold/70 ${pad} ${fontSize} font-medium uppercase tracking-[0.16em] leading-none ${
              highlight.includes(item) ? hl : text
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
