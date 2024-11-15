import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/150?text=No+Image';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        setMovie(movieResponse.data);

        const castResponse = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        setCast(castResponse.data.cast);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError('Failed to fetch movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details">
      {movie && (
        <>
          <div className="movie-header">
            <img
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : PLACEHOLDER_IMAGE}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
          <h2>Cast</h2>
          {cast.length > 0 ? (
            <div className="cast-list">
              {cast.map((member) => (
                <div className="cast-item" key={member.id}>
                  <img
                    src={member.profile_path ? `${IMAGE_BASE_URL}${member.profile_path}` : PLACEHOLDER_IMAGE}
                    alt={member.name}
                    className="cast-photo"
                  />
                  <div className="cast-info">
                    <strong>{member.name}</strong>
                    <p>as {member.character}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No cast information available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
