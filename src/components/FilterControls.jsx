import React from 'react';

const OPTIONS = ['All', 'Watched', 'Unwatched'];

export default function FilterControls({ current, onChange }) {
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
      {OPTIONS.map(opt => (
        <button
          key={opt}
          className={opt === current ? 'button' : 'button ghost'}
          onClick={() => onChange(opt)}
          type="button"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}