import React from 'react'
import { Anime } from '../types'

interface IProps {
  animes: Anime[]
}

const AnimeList: React.FC<IProps> = ({
  animes
}) => {

  return (
    <div>
      {animes.map(anime => (
        <div className="anime-item">
          <h3>{anime.title}</h3>
          <p>{anime.rating} stars</p>
          <div className="buttonbar">
            <button className="btn btn-primary">
              Edit
            </button>
            <button className="btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnimeList