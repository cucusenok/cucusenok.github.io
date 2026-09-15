import { profile, work } from '../data/profile'
import { Section } from './Section'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function fmt(d?: string) {
  if (!d) return 'Present'
  const [y, m] = d.split('-')
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y
}

/** Company-specific tech chips shown under the bullets; keyed by company name in resume.json. */
const TECH: Record<string, string[]> = {
  Banank: ['Go', 'Java', 'NATS', 'YugabyteDB', 'WSO2', 'Fineract'],
  Samsung: ['Python', 'LLM · RAG', 'ElasticSearch', 'PyTorch'],
  Nokia: ['Go', 'React', '5G · O-RAN', 'Transformers'],
}

/** Bullets kept on the site; the full list lives in the PDF. */
const MAX_BULLETS = 3

export function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      eyebrow="EXPERIENCE"
      title="Nine years, five teams, one habit: ship measurable outcomes."
      aside={<a className="nav__link" href={profile.cvUrl} download>full CV →</a>}
    >
      <div className="xp">
        {work.map((w) => (
          <article className="xp__row" key={w.name}>
            <div className="xp__meta">
              <div className="display xp__company">{w.name}</div>
              <div className="mono muted xp__dates">
                {fmt(w.startDate)} — {fmt(w.endDate)}
                {w.location ? ` · ${w.location}` : ''}
              </div>
              {!w.endDate && <div className="mono accent xp__now">current</div>}
            </div>
            <div className="xp__body">
              <div className="xp__position">{w.position}</div>
              {w.highlights.slice(0, MAX_BULLETS).map((h) => (
                <div className="bullet" key={h}>
                  {h}
                </div>
              ))}
              {TECH[w.name] && (
                <div className="chips">
                  {TECH[w.name].map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
