import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { CloseIcon, DownloadIcon, MenuIcon } from './Icons'

const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'writing', label: 'Writing' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onProjects = pathname.startsWith('/projects')

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand mono">
          <span className="nav__mark">OT</span>
          <span>
            {profile.handle}
            <span className="faint">.github.io</span>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {SECTIONS.map((s) =>
            s.id === 'projects' ? (
              <NavLink key={s.id} to="/projects" className={({ isActive }) => `nav__link ${isActive || onProjects ? 'nav__link--active' : ''}`}>
                {s.label}
              </NavLink>
            ) : (
              <Link key={s.id} to={`/#${s.id}`} className="nav__link">
                {s.label}
              </Link>
            ),
          )}
          <a className="btn btn--sm nav__cv-mobile" href={profile.cvUrl} download>
            <DownloadIcon size={16} /> Download CV
          </a>
        </nav>

        <div className="nav__right">
          <a className="btn btn--sm nav__cv" href={profile.cvUrl} download>
            <DownloadIcon size={16} /> CV · PDF
          </a>
          <button className="nav__burger" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
