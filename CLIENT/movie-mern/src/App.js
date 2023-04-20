import { useState, useEffect } from "react";
import { MovieContext } from "./components/movieContext";

// import SearchBar from './components/SearchBar';
import Gallery from "./components/gallery.js";
import SideBar from "./components/sideBar.js";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // this api is set search for movie by name
  const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [API_URL]);

  return (
    <div>
      <MovieContext.Provider value={{ movies }}>
        <SideBar query={query} setQuery={setQuery} setMovies={setMovies} />
        <Gallery />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
