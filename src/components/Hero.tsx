import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { Chips } from './Chip'
import { DownloadIcon } from './Icons'
import { Socials } from './Socials'

function Who({ className = '' }: { className?: string }) {
  return (
    <div className={`hero__who ${className}`}>
      <img className="hero__photo" src={profile.photo} alt={profile.name} width={72} height={72} />
      <div>
        <div className="display hero__handle">@{profile.handle}</div>
        <div className="mono muted hero__loc">{profile.location}</div>
      </div>
    </div>
  )
}

function Facts() {
  return (
    <div className="hero__facts">
      {profile.facts.map((f) => (
        <div key={f.label}>
          <div className="display hero__fact">
            {f.value}
            <span className="accent">{f.suffix}</span>
          </div>
          <div className="mono faint hero__fact-label">{f.label}</div>
        </div>
      ))}
    </div>
  )
}

/**
 * Desktop: copy on the left, profile card on the right.
 * Mobile: one business-card screen — photo, name, title, socials, CV, facts — sized to the viewport.
 */
export function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <Who className="hero__who--mobile" />
          <div className="hero__status mono">
            <span className="hero__dot" />
            {profile.status}
          </div>
          <h1 className="hero__name display">
            {first}
            <br />
            {rest.join(' ')}
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <Socials className="hero__socials" />
          <div className="hero__actions">
            <a className="btn btn--primary" href={profile.cvUrl} download>
              <DownloadIcon size={16} /> Download CV
            </a>
            <Link className="btn" to="/projects">
              See projects
            </Link>
          </div>
          <div className="hero__facts-mobile">
            <div className="rule" />
            <Facts />
          </div>
        </div>

        <aside className="hero__card card">
          <Who />
          <div className="rule" />
          <Facts />
          <div className="rule" />
          <Chips items={profile.keywords} />
        </aside>
      </div>
    </section>
  )
}
