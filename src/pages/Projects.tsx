import { useEffect } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  useEffect(() => {
    document.title = 'Projects — Oleksandr Teroshkin'
  }, [])
  return (
    <section className="section page">
      <div className="wrap section__inner">
        <div className="section__head">
          <div className="section__heading">
            <div className="section__index mono">02 / PROJECTS</div>
            <h1 className="h2 display">All projects</h1>
          </div>
          <div className="section__aside mono muted">{projects.length} projects · 2017 — now</div>
        </div>
        <div className="pgrid">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}
