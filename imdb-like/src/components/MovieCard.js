import React, { useEffect } from 'react';

const MovieCard = ({ movie, onClick }) => {
  useEffect(() => {
    console.log('MovieCard Component Mounted for movie:', movie.title);
  }, [movie]);

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Category: {movie.category}</p>
    </div>
  );
};

export default MovieCard;