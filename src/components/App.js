import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
    const NewMovie = { 
      id: movies.length + 1, 
      title, 
      watched: false 
    };
    setMovies((movie)=>[...movie, NewMovie]);
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    const updateMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched };
      }
      return movie;
    });
    setMovies(updateMovies);
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies(movies.filter((movie) => movie.id !== id)) ;
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      <AddMovieForm onAddMovie={handleAddMovie} />
      {/* TODO: Add MovieList Component */}
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
