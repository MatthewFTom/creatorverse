import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function Credits() {
  return (
    <section className="credits">
      <PageHeader>
        <Link to="/new" role="button">
          Add Creator
        </Link>
        <Link to="/credits" role="button" className="outline" aria-current="page">
          Credits
        </Link>
      </PageHeader>

      <article>
        <header>
          <h1>Credits</h1>
        </header>

        <p>
          <strong>Creatorverse</strong> was built by{' '}
          <strong>Matthew Floresca Tom</strong> for WEB103 Prework.
        </p>

        <p>
          <a
            href="https://github.com/MatthewFTom"
            target="_blank"
            rel="noreferrer"
          >
            github.com/MatthewFTom
          </a>
        </p>

        <footer className="credits__actions">
          <Link to="/" role="button">
            Back to Creatorverse
          </Link>
        </footer>
      </article>
    </section>
  )
}

export default Credits
