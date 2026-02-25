import React, { useState } from 'react';
import { generateId } from '../utils/id';

const GENRES = ['Action', 'Drama', 'Comedy', 'Thriller', 'Sci-Fi', 'Romance'];

export default function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(GENRES[0]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    const movie = {
      id: generateId(),
      title: trimmed,
      genre,
      watched: false
    };

    onAdd(movie);
    setTitle('');
    setGenre(GENRES[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          className="input"
          placeholder="Movie title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="form-row">
        <select className="input" value={genre} onChange={e => setGenre(e.target.value)}>
          {GENRES.map(g => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <button className="button" type="submit">Add Movie</button>
      </div>
    </form>
  );
}