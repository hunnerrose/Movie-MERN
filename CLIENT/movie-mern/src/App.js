import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./components/movieContext";

import Gallery from "./components/gallery";
import SideBar from "./components/sideBar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
// require("dotenv").config();

export default function App() {
  // state variables
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [movieClicked, setMovieClicked] = useState(false);

  // api variables
  const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=";
  const FEAT_API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";

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

  return (
    <div className="App">
      <MovieContext.Provider value={{ movies }}>
        {/*SideBar*/}
        <SideBar query={query} setQuery={setQuery} />

        {/*TopNav bar*/}
        <TopNav setQuery={setQuery} query={query} />

        {/*Banner - displays Banner component until a movie is clicked.*/}
        {selectedMovie ? (
          <Banner selectedMovie={selectedMovie} movieClicked={movieClicked} />
        ) : null}

        {/*Gallery >> GalleryItem*/}
        <div id="gallery">
          <Gallery
            setMovieClicked={setMovieClicked}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </div>

        {/*Footer*/}
        <Footer />
      </MovieContext.Provider>
    </div>
  );
}
