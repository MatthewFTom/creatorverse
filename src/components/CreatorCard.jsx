import { Link } from 'react-router-dom'

function CreatorCard({ creator, onDelete }) {
  const { id, name, url, description, imageURL } = creator

  return (
    <article className="creator-card">
      {imageURL ? (
        <img src={imageURL} alt={name} className="creator-card__image" />
      ) : (
        <div className="creator-card__placeholder" aria-hidden="true">
          {name?.charAt(0)?.toUpperCase() || '?'}
        </div>
      )}
      <header>
        <h3>{name}</h3>
      </header>
      <p className="creator-card__description">
        {description?.length > 120
          ? `${description.slice(0, 120)}…`
          : description}
      </p>
      <footer className="creator-card__actions">
        <Link to={`/creator/${id}`} role="button" className="outline">
          View
        </Link>
        <Link to={`/edit/${id}`} role="button" className="secondary">
          Edit
        </Link>
        <button type="button" className="contrast" onClick={() => onDelete(id)}>
          Delete
        </button>
      </footer>
      {url && (
        <p className="creator-card__url">
          <a href={url} target="_blank" rel="noreferrer">
            Visit channel
          </a>
        </p>
      )}
    </article>
  )
}

export default CreatorCard
