import React, { useState } from 'react';
import AnimeList from './lists/AnimeList'
import './App.css';

const App: React.FC = () => {
  const initialAnimeData = [
    { id: 0, title: 'my hero academia', rating: 4 },
    { id: 1, title: 'sword art online', rating: 5 },
    { id: 2, title: 'vampire night', rating: 3 },
  ]
  const [animes, setAnimes] = useState(initialAnimeData)

  return (
    <div className="App">
      <h1>Anime Form</h1>
      <div className="splitscreen">
        <div className="split-item left">
          <h2 className="section-heading">Add</h2>
        </div>
        <div className="split-item right">
          <h2 className="section-heading">Your Animes</h2>
          <AnimeList animes={animes} />
        </div>
      </div>
    </div>
  );
}

export default App;
