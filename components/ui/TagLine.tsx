// Runde badges med hel farve. Bruges overalt, hvor vi viser korte labels, så udtrykket er ens.
//
// To varianter vises skiftevis, så man kan vælge:
//   ink  = sort med guldtekst
//   sand = lys sandfarve med sort tekst
// Når én er valgt: sæt `variant="ink"` eller `variant="sand"` (eller ændr default herunder).
export type TagVariant = 'alternate' | 'ink' | 'sand'

export function TagLine({
  items,
  highlight = [],
  variant = 'alternate',
  tone = 'dark',
  size = 'sm',
  className = '',
}: {
  items: string[]
  /** Labels der skal stå fremhævet i guld (fx "Personligt site") */
  highlight?: string[]
  variant?: TagVariant
  /** "light" = bruges på mørk baggrund (tilføjer en fin kant om de sorte badges) */
  tone?: 'dark' | 'light'
  size?: 'sm' | 'md'
  className?: string
}) {
  const fontSize = size === 'md' ? 'text-[11px] md:text-xs' : 'text-[10px] md:text-[11px]'
  const pad = size === 'md' ? 'px-4 py-2' : 'px-3.5 py-1.5'

  const style = (item: string, index: number) => {
    if (highlight.includes(item)) return 'bg-gold text-black'
    const kind = variant === 'alternate' ? (index % 2 === 0 ? 'ink' : 'sand') : variant
    if (kind === 'ink') return `bg-black text-gold ${tone === 'light' ? 'ring-1 ring-white/25' : ''}`
    // Sand: fin kant, så den stadig kan ses mod en sandfarvet baggrund
    return 'bg-[#e8dfd0] text-black ring-1 ring-black/10'
  }

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((item, i) => (
        <li
          key={item}
          className={`rounded-full ${pad} ${fontSize} font-medium uppercase tracking-[0.14em] leading-none ${style(item, i)}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
