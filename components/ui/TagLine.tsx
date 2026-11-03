// Redaktionel liste af korte labels: små versaler med en lille guldrombe foran.
// Erstatter de runde "pille"-badges, så udtrykket er roligt og ens overalt.
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
  const text = tone === 'dark' ? 'text-black/70' : 'text-white/75'
  const hl = tone === 'dark' ? 'text-gold-dark' : 'text-gold'
  const fontSize = size === 'md' ? 'text-xs md:text-[13px]' : 'text-[11px]'

  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`inline-flex items-center gap-2.5 ${fontSize} font-medium uppercase tracking-[0.18em] ${
            highlight.includes(item) ? hl : text
          }`}
        >
          <span aria-hidden="true" className="w-[5px] h-[5px] rotate-45 bg-gold shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}
