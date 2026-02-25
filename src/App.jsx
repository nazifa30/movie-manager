import React, { useState } from 'react';
import Header from './components/Header';
import AddMovieForm from './components/AddMovieForm';
import FilterControls from './components/FilterControls';
import MovieList from './components/MovieList';
import Summary from './components/Summary';

export default function App() {
  
  const [movies, setMovies] = useState([
    
    { id: 'm1', title: 'Inception', genre: 'Action', watched: false },
    { id: 'm2', title: 'The Godfather', genre: 'Drama', watched: true }
  ]);

  
  const [filter, setFilter] = useState('All');

  
  function handleAddMovie(movie) {
    
    setMovies(prev => [movie, ...prev]);
  }

  
  function handleToggleWatched(id) {
    setMovies(prev =>
      prev.map(m => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  }

  
  function handleDelete(id) {
    setMovies(prev => prev.filter(m => m.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="grid">
          <section className="card">
            <h2>Add Movie</h2>
            <AddMovieForm onAdd={handleAddMovie} />
          </section>

          <section className="card">
            <h2>Filter</h2>
            <FilterControls current={filter} onChange={setFilter} />
          </section>

          <section className="card fullwidth">
            <h2>Watchlist</h2>
            <MovieList
              movies={movies}
              filter={filter}
              onToggle={handleToggleWatched}
              onDelete={handleDelete}
            />
          </section>

          <section className="card">
            <h2>Summary</h2>
            <Summary movies={movies} />
          </section>
        </div>
      </main>
    </div>
  );
}