import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) navigate(`/search/${query}`);
  };

  return (
    <nav>
      <h1>MovieSpot</h1>
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
