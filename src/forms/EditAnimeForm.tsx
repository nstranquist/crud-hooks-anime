import React, { useState, useEffect } from 'react'
import { Anime } from '../types'

interface IProps {
  currentAnime: Anime
  updateAnime(anime: Anime): void
}

const EditAnimeForm: React.FC<IProps> = ({
  currentAnime,
  updateAnime
}) => {
  const [anime, setAnime] = useState<Anime>(currentAnime)

  useEffect(() => {
    setAnime(currentAnime)  // to change/re-render edit fields when anime clicked in list
  }, [currentAnime, updateAnime])

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement
    setAnime({ ...anime, [name]: value })
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (!anime.title || !anime.rating) return
      updateAnime(anime)
    }}>
      <div className="form-item">
        <label>Title: </label>
        <input type="text" name="title" value={anime.title} onChange={handleInputChange} />
      </div>
      <div className="form-item">
        <label>Rating: </label>
        <input type="number" name="rating" min="1" max="5" value={anime.rating!} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary">
        Update Anime
      </button>
    </form>
  )
}

export default EditAnimeForm