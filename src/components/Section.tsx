import type { ReactNode } from 'react'

interface Props {
  id: string
  index: string
  eyebrow: string
  title: string
  aside?: ReactNode
  children: ReactNode
}

/** Section shell: mono index + heading on the left, an optional link on the right. */
export function Section({ id, index, eyebrow, title, aside, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="wrap section__inner">
        <div className="section__head">
          <div className="section__heading">
            <div className="section__index mono">
              {index} / {eyebrow}
            </div>
            <h2 className="h2 display">{title}</h2>
          </div>
          {aside && <div className="section__aside mono">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  )
}
