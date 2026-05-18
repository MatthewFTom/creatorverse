import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  })
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
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
      } else {
        setForm({
          name: data.name ?? '',
          url: data.url ?? '',
          description: data.description ?? '',
          imageURL: data.imageURL ?? '',
        })
      }
      setLoading(false)
    }

    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const payload = {
      name: form.name.trim(),
      url: form.url.trim(),
      description: form.description.trim(),
      imageURL: form.imageURL.trim() || null,
    }

    const { error: updateError } = await supabase
      .from('creators')
      .update(payload)
      .eq('id', id)

    setSubmitting(false)

    if (updateError) {
      setError(updateError.message)
      return
    }

    navigate(`/creator/${id}`)
  }

  if (loading) return <p aria-busy="true">Loading creator…</p>

  return (
    <section>
      <nav className="breadcrumb">
        <Link to={`/creator/${id}`}>← Back to creator</Link>
      </nav>

      <h1>Edit Creator</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="url">
          URL
          <input
            id="url"
            name="url"
            type="url"
            required
            placeholder="https://"
            value={form.url}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={form.description}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="imageURL">
          Image URL <small>(optional)</small>
          <input
            id="imageURL"
            name="imageURL"
            type="url"
            placeholder="https://"
            value={form.imageURL}
            onChange={handleChange}
          />
        </label>

        <footer className="form-actions">
          <button type="submit" disabled={submitting}>
            {submitting ? 'Saving…' : 'Save Changes'}
          </button>
          <Link to={`/creator/${id}`} role="button" className="secondary">
            Cancel
          </Link>
        </footer>
      </form>
    </section>
  )
}

export default EditCreator
