import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Chips } from '../components/Chip'
import { Gallery } from '../components/Gallery'
import { ArrowLeftIcon, ArrowUpRightIcon } from '../components/Icons'
import { ProjectLogo } from '../components/ProjectCard'
import { galleryOf, projectBySlug, projects } from '../data/projects'
import { NotFound } from './NotFound'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = projectBySlug(slug)

  useEffect(() => {
    if (project) document.title = `${project.name} — Oleksandr Teroshkin`
  }, [project])

  if (!project) return <NotFound />

  const images = galleryOf(project.slug)
  const idx = projects.indexOf(project)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <section className="section page project">
      <div className="wrap section__inner">
        <Link to="/projects" className="mono nav__link project__back">
          <ArrowLeftIcon size={14} /> all projects
        </Link>

        <div className="project__head">
          <div className="project__intro">
            <div className="project__logo-row">
              <ProjectLogo slug={project.slug} size={52} />
              <span className="badge mono">{project.org.toUpperCase()}</span>
            </div>
            <h1 className="display project__title">{project.name}</h1>
            <p className="project__tagline">{project.tagline}</p>
            {project.url && (
              <div className="project__actions">
                <a className="btn btn--primary" href={project.url} target="_blank" rel="noopener">
                  Visit site <ArrowUpRightIcon size={16} />
                </a>
              </div>
            )}
          </div>
          <aside className="card project__facts">
            <div className="kv"><span className="kv__k mono">ROLE</span><span>{project.role}</span></div>
            <div className="kv"><span className="kv__k mono">YEARS</span><span>{project.years}</span></div>
            <div className="kv">
              <span className="kv__k mono">STACK</span>
              <Chips items={project.tags} />
            </div>
          </aside>
        </div>

        <Gallery images={images} alt={project.name} />

        <div className="project__story">
          <div className="mono muted project__story-label">WHAT IT IS</div>
          <div className="prose">
            {project.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <nav className="project__nav">
          <Link to={`/projects/${prev.slug}`} className="card project__nav-link">
            <span className="mono faint">← previous</span>
            <span className="display">{prev.name}</span>
          </Link>
          <Link to={`/projects/${next.slug}`} className="card project__nav-link project__nav-link--next">
            <span className="mono faint">next →</span>
            <span className="display">{next.name}</span>
          </Link>
        </nav>
      </div>
    </section>
  )
}
