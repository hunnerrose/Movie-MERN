import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./components/movieContext";
import { InputText } from "primereact/inputtext";

import Gallery from "./components/gallery";
import SideBar from "./components/sideBar";
import Banner from "./components/banner";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [movieClicked, setMovieClicked] = useState(false);

  const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=";
  const FEAT_API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";

  async function fetchFeaturedMovies() {
    const response = await fetch(
      `${FEAT_API_URL}${API_KEY}&sort_by=popularity.desc`
    );
    const data = await response.json();
    setMovies(data.results);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setSelectedMovie(data.results[randomIndex]);
  }

  // async function fetchAMovie() {
  //   const response = await fetch(`${API_URL}${API_KEY}&query=${query}`);
  //   const data = await response.json();
  //   setMovies(data.results);
  //   setSelectedMovie(data.results[0]);
  // }

  // useEffect(() => {
  //   if (query !== "") {
  //     fetchAMovie();
  //   } else {
  //     fetchFeaturedMovies();
  //   }
  // }, [query]);

  const fetchAMovie = useCallback(async () => {
    const response = await fetch(`${API_URL}${API_KEY}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
    setSelectedMovie(data.results[0]);
  }, [query]);

  useEffect(() => {
    if (query !== "") {
      fetchAMovie();
    } else {
      fetchFeaturedMovies();
    }
  }, [query, fetchAMovie]);

  return (
    <div className="App">
      <MovieContext.Provider value={{ movies }}>
        <SideBar query={query} setQuery={setQuery} />

        <header id="header" className="mb-2 mx-5">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="text-white">SHMOVIE FANATICS</h3>
            <span className="p-float-label p-input-icon-left mb-3">
              <i className="pi pi-search" />
              <InputText
                id="lefticon"
                value={query}
                setQuery={setQuery}
                onChange={(e) => setQuery(e.target.value)}
              />
              <label htmlFor="lefticon">Search for a movie</label>
            </span>
          </div>
        </header>

        {selectedMovie ? (
          <Banner selectedMovie={selectedMovie} movieClicked={movieClicked} />
        ) : null}

        <div id="gallery">
          <Gallery setMovieClicked={setMovieClicked} />
        </div>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
