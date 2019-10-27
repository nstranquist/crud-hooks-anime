import React, { useState } from 'react'
import { Anime } from '../types'

interface IProps {
  addAnime(newAnime: Anime): void
}

const AddAnimeForm: React.FC<IProps> = ({
  addAnime
}) => {
  const initialFormState = { id: null, title: '', rating: 3 }
  const [newAnime, setNewAnime] = useState(initialFormState)

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement
    setNewAnime({ ...newAnime, [name]: value })
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (!newAnime.title || !newAnime.rating) return
      addAnime(newAnime)
      setNewAnime(initialFormState)
    }}>
      <div className="form-item">
        <label>Title</label>
        <input type="text" name="title" value={newAnime.title} onChange={handleInputChange} />
      </div>
      <div className="form-item">
        <label>Rating</label>
        <input type="number" name="rating" min="1" max="5" value={newAnime.rating} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary">
        Add
      </button>
    </form>
  )
}

export default AddAnimeForm