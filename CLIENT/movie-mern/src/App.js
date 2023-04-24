import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./context/movieContext";

import Gallery from "./components/gallery";
import SideBar from "./components/sideBar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import TopNav from "./components/topNav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InputText } from "primereact/inputtext";

import MovieView from "./components/MovieView";

export default function App() {
  // state variables
  const [query, setQuery] = useState(""); // handles search input
  const [movies, setMovies] = useState([]); // handles list of movies returned from api
  const [selectedMovie, setSelectedMovie] = useState([]); // handles banner display
  const [movieClicked, setMovieClicked] = useState(false); // handles banner display on click

  // api variables
  const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=";
  const FEAT_API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";
  const BACKDROP_IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

  // default movies display api
  async function fetchFeaturedMovies() {
    const response = await fetch(
      `${FEAT_API_URL}${API_KEY}&sort_by=popularity.desc`
    );
    const data = await response.json();
    setMovies(data.results);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setSelectedMovie(data.results[randomIndex]);
  }

  // movies by search api
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

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  return (
    {
      /*<div className="App">
      <MovieContext.Provider value={{ movies }}>
        <SideBar query={query} setQuery={setQuery} setMovies={setMovies} />

        <TopNav setQuery={setQuery} query={query} />

        {selectedMovie ? (
          <Banner selectedMovie={selectedMovie} movieClicked={movieClicked} />
        ) : null}

        <div id="gallery">
          <Gallery
            setMovieClicked={setMovieClicked}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </div>

        <Footer />
        </MovieContext.Provider>*/
    },
    (
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MovieContext.Provider value={{ movies }}>
                  <SideBar
                    query={query}
                    setQuery={setQuery}
                    setMovies={setMovies}
                  />

                  <TopNav setQuery={setQuery} query={query} />

                  {selectedMovie ? (
                    <Banner
                      selectedMovie={selectedMovie}
                      movieClicked={movieClicked}
                    />
                  ) : null}

                  <div id="gallery">
                    <Gallery
                      setMovieClicked={setMovieClicked}
                      selectedMovie={selectedMovie}
                      setSelectedMovie={setSelectedMovie}
                    />
                  </div>

                  <Footer />
                </MovieContext.Provider>
              }
            />
            <Route path={"/movies/:id"} element={<MovieView />} />
          </Routes>
        </Router>
      </div>
    )
  );
}
