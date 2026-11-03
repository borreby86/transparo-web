import Image from 'next/image'

export function BrowserFrame({
  src,
  w,
  h,
  alt,
  host,
  sizes = '(max-width: 1024px) 100vw, 720px',
  crop,
}: {
  src: string
  w: number
  h: number
  alt: string
  host: string
  sizes?: string
  /** Vis kun toppen af billedet i dette format (fx '4/3'), så kort står lige */
  crop?: string
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#f3f1ee] border-b border-black/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="ml-3 text-[11px] text-black/40 bg-white rounded-md px-3 py-1 truncate">{host}</span>
      </div>
      {crop ? (
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: crop }}>
          <Image src={src} alt={alt} fill className="object-cover object-top" sizes={sizes} quality={85} />
        </div>
      ) : (
        <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" sizes={sizes} quality={85} />
      )}
    </div>
  )
}
