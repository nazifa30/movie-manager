import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, filter, onToggle, onDelete }) {
  
  const filteredMovies = movies.filter(m => {
    if (filter === 'All') return true;
    if (filter === 'Watched') return m.watched === true;
    if (filter === 'Unwatched') return m.watched === false;
    return true;
  });

  return (
    <div>
      {filteredMovies.length === 0 ? (
        <div className="empty">No movies found. Add one!</div>
      ) : (
        <div className="list">
          {filteredMovies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onToggle={() => onToggle(movie.id)}
              onDelete={() => onDelete(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}