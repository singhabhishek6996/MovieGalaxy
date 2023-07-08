import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import MovieSearch from './components/movieSearch/movieSearch';

function App() {

  // const[movies, setMovies] = useState([]);
  // useEffect(() => {
  //     fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ba32fbafdbdb580ddd1c62011752c3a&language=en-US")
  //     .then((res)=>resjson())
  //     .then(data=>{
  //       setMovies(data.results);
  //     })
  // }, [])
  
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movie/search:id" element={<MovieSearch />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
