import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'

function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      setLoading(true)
      setError(null)
      const { data, error: fetchError } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()

      if (fetchError) {
        setError(fetchError.message)
        setCreator(null)
      } else {
        setCreator(data)
      }
      setLoading(false)
    }

    fetchCreator()
  }, [id])

  const handleDelete = async () => {
    if (!window.confirm('Delete this creator permanently?')) return

    const { error: deleteError } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    if (deleteError) {
      setError(deleteError.message)
      return
    }

    navigate('/')
  }

  if (loading) return <p aria-busy="true">Loading creator…</p>
  if (error) return <p className="error">{error}</p>
  if (!creator) return <p>Creator not found.</p>

  const { name, url, description, imageURL } = creator

  return (
    <article className="creator-detail">
      <nav className="breadcrumb">
        <Link to="/">← All creators</Link>
      </nav>

      {imageURL ? (
        <img src={imageURL} alt={name} className="creator-detail__image" />
      ) : (
        <div className="creator-detail__placeholder" aria-hidden="true">
          {name?.charAt(0)?.toUpperCase()}
        </div>
      )}

      <header>
        <h1>{name}</h1>
        {url && (
          <p>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </p>
        )}
      </header>

      <p>{description}</p>

      <footer className="creator-detail__actions">
        <Link to={`/edit/${id}`} role="button">
          Edit
        </Link>
        <button type="button" className="contrast" onClick={handleDelete}>
          Delete
        </button>
      </footer>
    </article>
  )
}

export default ViewCreator
