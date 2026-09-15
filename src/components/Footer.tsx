import { profile } from '../data/profile'
import { Socials } from './Socials'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__left">
          <div className="display footer__title">Let's talk.</div>
          <a className="mono accent" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <Socials size={36} />
          <a className="nav__link footer__medium" href={profile.links.medium} target="_blank" rel="noopener">
            Writing on Medium →
          </a>
        </div>
        <div className="mono faint footer__meta">
          © {new Date().getFullYear()} {profile.name}
          <br />
          React · Vite · GitHub Pages
        </div>
      </div>
    </footer>
  )
}
