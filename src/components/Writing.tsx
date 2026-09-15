import { articles, mediumUrl } from '../data/articles'
import { ArrowUpRightIcon } from './Icons'
import { Section } from './Section'

export function Writing() {
  return (
    <Section
      id="writing"
      index="04"
      eyebrow="WRITING"
      title="Notes on Medium"
      aside={<a className="nav__link" href={mediumUrl} target="_blank" rel="noopener">medium.com/@cucusenok →</a>}
    >
      {articles.length ? (
        <div className="articles">
          {articles.map((a) => (
            <a className="article" href={a.url} target="_blank" rel="noopener" key={a.url}>
              <span className="mono muted article__date">{a.date}</span>
              <span className="article__text">
                <span className="display article__title">{a.title}</span>
                {a.subtitle && <span className="muted article__subtitle">{a.subtitle}</span>}
              </span>
              <ArrowUpRightIcon className="muted" />
            </a>
          ))}
        </div>
      ) : (
        <a className="card articles__empty" href={mediumUrl} target="_blank" rel="noopener">
          <span className="display">Engineering notes, architecture write-ups and lessons from production.</span>
          <span className="btn btn--sm">Read on Medium <ArrowUpRightIcon size={14} /></span>
        </a>
      )}
    </Section>
  )
}
