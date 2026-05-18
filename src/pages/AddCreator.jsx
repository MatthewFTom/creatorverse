import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const initialForm = {
  name: '',
  url: '',
  description: '',
  imageURL: '',
}

function AddCreator() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

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

    const { data, error: insertError } = await supabase
      .from('creators')
      .insert([payload])
      .select()
      .single()

    setSubmitting(false)

    if (insertError) {
      setError(insertError.message)
      return
    }

    navigate(`/creator/${data.id}`)
  }

  return (
    <section>
      <nav className="breadcrumb">
        <Link to="/">← All creators</Link>
      </nav>

      <h1>Add Creator</h1>

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
            {submitting ? 'Saving…' : 'Create Creator'}
          </button>
          <Link to="/" role="button" className="secondary">
            Cancel
          </Link>
        </footer>
      </form>
    </section>
  )
}

export default AddCreator
