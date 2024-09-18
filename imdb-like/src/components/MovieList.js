import React, { useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, setSelectedMovie }) => {
  useEffect(() => {
    console.log('MovieList Component Mounted');
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
};

export default MovieList;