import React from 'react';
import './movieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="ui card">
      <a className="image" href="#">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </a>
      <div className="content">
        <a className="header" href="#">
          {movie.title}
        </a>
        <div className="meta">
          <a>{movie.release_date}</a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
