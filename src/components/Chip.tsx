interface Props {
  items: string[]
  className?: string
}

export function Chips({ items, className = '' }: Props) {
  if (!items.length) return null
  return (
    <div className={`chips ${className}`}>
      {items.map((t) => (
        <span className="chip" key={t}>
          {t}
        </span>
      ))}
    </div>
  )
}
