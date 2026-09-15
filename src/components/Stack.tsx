import { stack } from '../data/stack'
import { Section } from './Section'

export function Stack() {
  return (
    <Section id="stack" index="03" eyebrow="STACK" title="Tools, with years of daily use">
      <div className="stack">
        {stack.map((g) => (
          <div className="stack__group" key={g.title}>
            <div className="mono muted stack__title">{g.title.toUpperCase()}</div>
            <div className="rule" />
            {g.items.map((it) =>
              it.note ? (
                <details className="stack__item" key={it.name}>
                  <summary className="stack__row">
                    <span>{it.name}</span>
                    <span className="leader" />
                    <span className="mono muted stack__years">{it.years}</span>
                  </summary>
                  <p className="stack__note">{it.note}</p>
                </details>
              ) : (
                <div className="stack__item" key={it.name}>
                  <div className="stack__row stack__row--static">
                    <span>{it.name}</span>
                    <span className="leader" />
                    <span className="mono muted stack__years">{it.years}</span>
                  </div>
                </div>
              ),
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
