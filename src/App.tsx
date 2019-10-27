import React, { useState } from 'react';
import AnimeList from './lists/AnimeList'
import AddAnimeForm from './forms/AddAnimeForm'
import EditAnimeForm from './forms/EditAnimeForm'
import { Anime } from './types'
import './App.css';

const App: React.FC = () => {
  const initialAnimeData = [
    { id: 0, title: 'my hero academia', rating: 4 },
    { id: 1, title: 'sword art online', rating: 5 },
    { id: 2, title: 'vampire night', rating: 3 },
  ]
  const [animes, setAnimes] = useState<Anime[]>(initialAnimeData)
  const [editing, setEditing] = useState(false)
  const [currentAnime, setCurrentAnime] = useState<Anime>({ id: null, title: '', rating: 3 })

  const addAnime = (newAnime: Anime) => {
    newAnime.id = animes.length + 1   // use firebase here
    setAnimes([...animes, newAnime])
  }
  const deleteAnime = (id: number) => {
    setEditing(false)
    setAnimes(animes.filter(anime => anime.id !== id))
  }
  const editAnime = (anime: Anime) => {
    setEditing(true)
    setCurrentAnime({ id: anime.id, title: anime.title, rating: anime.rating })
  }
  const updateAnime = (newAnime: Anime) => {
    setEditing(false)
    setAnimes(animes.map(anime => (
      anime.id === newAnime.id ? newAnime : anime
    )))
  }

  return (
    <div className="App">
      <h1>Anime Form</h1>
      <div className="splitscreen">
        <div className="split-item left">
          {!editing ? (
            <div>
              <h2 className="section-heading">Add Anime</h2>
              <AddAnimeForm addAnime={addAnime} />
            </div>

          ) : (
              <div>
                <h2 className="section-heading">Edit Anime</h2>
                <EditAnimeForm updateAnime={updateAnime} currentAnime={currentAnime} />
              </div>
            )}
        </div>
        <div className="split-item right">
          <h2 className="section-heading">Your Animes</h2>
          <AnimeList animes={animes} deleteAnime={deleteAnime} editAnime={editAnime} />
        </div>
      </div>
    </div>
  );
}

export default App;
