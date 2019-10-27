import React from 'react'
import { Anime } from '../types'

interface IProps {
  animes: Anime[]
  editAnime(anime: Anime): void
  deleteAnime(id: number): void
}

const AnimeList: React.FC<IProps> = ({
  animes,
  editAnime,
  deleteAnime
}) => {

  return (
    <div>
      {animes.map(anime => (
        <div className="anime-item">
          <h3>{anime.title}</h3>
          <p>{anime.rating} stars</p>
          <div className="buttonbar">
            <button onClick={(event) => {
              event.preventDefault()
              editAnime(anime)
            }} className="btn btn-primary">
              Edit
            </button>
            <button onClick={(event) => {
              event.preventDefault()
              deleteAnime(anime.id!)
            }} className="btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnimeList