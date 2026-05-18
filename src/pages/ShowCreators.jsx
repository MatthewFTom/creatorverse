import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import CreatorCard from '../components/CreatorCard'

function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCreators = async () => {
    setLoading(true)
    setError(null)
    const { data, error: fetchError } = await supabase
      .from('creators')
      .select('*')
      .order('name', { ascending: true })

    if (fetchError) {
      setError(fetchError.message)
      setCreators([])
    } else {
      setCreators(data ?? [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCreators()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this creator?')) return

    const { error: deleteError } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    if (deleteError) {
      setError(deleteError.message)
      return
    }

    setCreators((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <section>
      <header className="page-header">
        <div>
          <h1>Creatorverse</h1>
          <p>Discover and manage your favorite content creators.</p>
        </div>
        <Link to="/new" role="button">
          Add Creator
        </Link>
      </header>

      {loading && <p aria-busy="true">Loading creators…</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && creators.length === 0 && (
        <article>
          <p>No creators yet. Be the first to add one!</p>
          <Link to="/new" role="button">
            Add Creator
          </Link>
        </article>
      )}

      {!loading && creators.length > 0 && (
        <div className="creator-grid">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ShowCreators
