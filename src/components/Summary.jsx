import React from 'react';

export default function Summary({ movies }) {
  
  const totalMovies = movies.length;
  const watchedCount = movies.filter(m => m.watched).length;
  const unwatchedCount = totalMovies - watchedCount;

  return (
    <div>
      <div className="small-muted">Total movies: <strong>{totalMovies}</strong></div>
      <div className="small-muted">Watched: <strong>{watchedCount}</strong></div>
      <div className="small-muted">Unwatched: <strong>{unwatchedCount}</strong></div>

      {totalMovies > 0 && watchedCount === totalMovies && (
        <div style={{marginTop:8,color:'var(--success)',fontWeight:600}}>You watched everything!</div>
      )}
    </div>
  );
}