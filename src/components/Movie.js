import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */



export default function Movie({movie, onToggleWatched, onDeleteMovie}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <span style={{
          textDecoration: movie.watched ? "line-through" : "none",}}>{movie.title}
        </span>
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </li>
  );
    
}
