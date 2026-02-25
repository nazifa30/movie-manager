import React from 'react';

export default function MovieItem({ movie, onToggle, onDelete }) {
  return (
    <div className="item">
      <div className="meta">
        <div style={{fontWeight:600}}>{movie.title}</div>
        <div className="small-muted">{movie.genre}</div>
      </div>

      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div className={`badge ${movie.watched ? 'watched' : 'unwatched'}`}>
          {movie.watched ? 'Watched' : 'Unwatched'}
        </div>

        <div className="controls">
          <button className="button ghost" onClick={onToggle} type="button">
            Toggle
          </button>
          <button
            className="button ghost"
            onClick={() => {
              if (confirm(`Delete "${movie.title}"?`)) onDelete();
            }}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}