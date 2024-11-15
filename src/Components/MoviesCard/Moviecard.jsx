/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <Link to={`/movie/${movie.id}`}>View Details</Link>
  </div>
);

export default MovieCard;
