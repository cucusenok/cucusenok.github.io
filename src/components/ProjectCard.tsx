import { Link } from 'react-router-dom'
import { galleryOf, LIGHT_LOGOS, logoOf, type Project } from '../data/projects'
import { Chips } from './Chip'
import { ArrowUpRightIcon } from './Icons'

export function ProjectLogo({ slug, size = 44 }: { slug: string; size?: number }) {
  const logo = logoOf(slug)
  if (!logo) return null
  if (LIGHT_LOGOS.has(slug)) return <img className="logo-inline" src={logo} alt="" style={{ height: size * 0.45 }} />
  // White SVG marks sit on a dark tile; raster logos drawn for light backgrounds get a light one.
  const dark = logo.endsWith('.svg') || logo.includes('.svg?')
  return (
    <span className={`logo-tile ${dark ? 'logo-tile--dark' : ''}`} style={{ width: size, height: size }}>
      <img src={logo} alt="" />
    </span>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const cover = galleryOf(project.slug)[0]
  if (project.featured && cover) {
    return (
      <Link to={`/projects/${project.slug}`} className="card pcard pcard--featured">
        <div className="pcard__cover">
          <img src={cover} alt={project.name} loading="lazy" />
          <span className="pcard__badge mono">{project.org.toUpperCase()}</span>
        </div>
        <div className="pcard__body">
          <div className="pcard__title-row">
            <div className="pcard__title-group">
              <ProjectLogo slug={project.slug} />
              <span className="display pcard__title pcard__title--lg">{project.name}</span>
            </div>
            <ArrowUpRightIcon className="muted" />
          </div>
          <p className="pcard__tagline">{project.tagline}</p>
          <Chips items={project.tags.slice(0, 6)} />
        </div>
      </Link>
    )
  }
  return (
    <Link to={`/projects/${project.slug}`} className="card pcard">
      <div className="pcard__title-row">
        <ProjectLogo slug={project.slug} />
        <span className="mono faint pcard__org">{project.org.toUpperCase()}</span>
      </div>
      <div className="pcard__text">
        <div className="display pcard__title">{project.name}</div>
        <p className="pcard__tagline pcard__tagline--sm">{project.tagline}</p>
      </div>
      <Chips items={project.tags.slice(0, 3)} className="pcard__chips" />
    </Link>
  )
}
