import { Link } from 'react-router-dom'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { Stack } from '../components/Stack'
import { Writing } from '../components/Writing'
import { projects } from '../data/projects'

/** Home shows the featured project plus the next four. */
const HOME_PROJECTS = 5

export function Home() {
  const shown = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)].slice(0, HOME_PROJECTS)
  return (
    <>
      <Hero />
      <Experience />
      <Section
        id="projects"
        index="02"
        eyebrow="PROJECTS"
        title="Selected work"
        aside={<Link className="nav__link" to="/projects">all {projects.length} projects →</Link>}
      >
        <div className="pgrid">
          {shown.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
      </Section>
      <Stack />
      <Writing />
    </>
  )
}
