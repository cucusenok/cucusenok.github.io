import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="section page notfound">
      <div className="wrap section__inner">
        <div className="section__index mono">404</div>
        <h1 className="h2 display">There is nothing here.</h1>
        <p className="muted">The page moved or never existed.</p>
        <Link className="btn" to="/">Back home</Link>
      </div>
    </section>
  )
}
