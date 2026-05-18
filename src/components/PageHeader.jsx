import { Link } from 'react-router-dom'

function PageHeader({ showTagline = false, children }) {
  return (
    <header className="page-header">
      <div>
        <h1>
          <Link to="/" className="page-header__title">
            Creatorverse
          </Link>
        </h1>
        {showTagline && (
          <p>Discover and manage your favorite content creators.</p>
        )}
      </div>
      {children && <div className="page-header__actions">{children}</div>}
    </header>
  )
}

export default PageHeader
