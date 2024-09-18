import React, { useEffect } from 'react';

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    console.log('MovieModal Component Mounted for movie:', movie.title);
  }, [movie]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <img src={movie.backdrop_path} alt={movie.title} />
        <p>Release Date: {movie.release_date}</p>
        <p>Category: {movie.category}</p>
      </div>
    </div>
  );
};

export default MovieModal;