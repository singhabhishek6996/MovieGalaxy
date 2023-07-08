import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieId, setMovieId] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Fetch the movie data from the API using movieTitle
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8ba32fbafdbdb580ddd1c62011752c3a&query=${movieTitle}&include_adult=false&language=en-US&page=1`);
      const data = await response.json();

      // Assuming the API returns a movie object with an 'id' property
      if (data && data.results[0].id) {
        setMovieId(data.results[0].id);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value);
  };

  // Redirect to the movie/id URL when movieId is available
  if (movieId) {
    window.location.href = `/movie/${movieId}`;
  }

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://i.ibb.co/kS2hVDk/logo-no-background.png"
            alt="Logo"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            value={movieTitle}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
