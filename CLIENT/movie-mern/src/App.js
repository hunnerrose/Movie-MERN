import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./context/movieContext";
// import { InputText } from "primereact/inputtext";

import Gallery from "./components/gallery";
import SideBar from "./components/sideBar";
import MovieView from "./components/MovieView";
import { FaGithub } from "react-icons/fa";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=";
  const FEAT_API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";
  // const BACKDROP_IMG_PATH = "https://image.tmdb.org/t/p/original";

  const dateOptions = {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  };

  async function fetchFeaturedMovies() {
    const response = await fetch(
      `${FEAT_API_URL}${API_KEY}&sort_by=popularity.desc`
    );
    const data = await response.json();
    setMovies(data.results);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setSelectedMovie(data.results[randomIndex]);
  }

  /* 
  hange the onclick to a modal
  inside modal, button to open movieView page
  setSelectedMovie(data.results[randomIndex]);
  */

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

                <header id="header" className="mb-2 mx-5">
                  <div class="flex items-center justify-between">
                    <a href="/" className="text-white no-underline">
                      <h3 className="text-white">SHMOVIE FANATICS</h3>
                    </a>
                    <span>
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-48 h-12 rounded-full mr-5 mb-3 p-4 bg-transparent outline-none transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-2 border-blue-500 focus:text-gray-400 focus:-translate-y-1 focus:scale-110 focus:border-blue-500 text-white"
                      />
                    </span>
                  </div>
                </header>

                {/* Banner */}
                <div className="w-full h-[550px] text-white mb-4 relative">
                  {/* DIV BELOW IS IMAGE OVERLAY TINT */}
                  <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
                    alt={selectedMovie?.title}
                  />
                  <div className="absolute bottom-0 p-4 md:p-8">
                    <h1
                      className="text-3xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
      from-teal-300 to-white"
                    >
                      {selectedMovie?.title}
                    </h1>
                    <p className="text-gray-300 text-lg my-2">
                      {new Date(selectedMovie?.release_date).toLocaleDateString(
                        "en-US",
                        dateOptions
                      )}
                    </p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-lg ">
                      {selectedMovie?.overview}
                    </p>
                    <Link to={`/movies/${selectedMovie?.id}`}>
                      <div className="my-4">
                        <button className="hover:scale-110 duration-200 border text-white border-blue-500 py-3 px-5 rounded-md">
                          View More
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>

                <Gallery />

                {/* Footer */}
                <footer class="flex justify-center">
                  <div class="text-center py-4">
                    <p className="text-white">
                      &copy; {new Date().getFullYear()} SHMOVIE FANATICS {""}
                    </p>
                    <a
                      href="https://github.com/hunnerrose/Movie-MERN"
                      class="flex items-center text-white hover:text-gray-400 focus:text-gray-400"
                    >
                      <FaGithub class="mx-auto" size={25} />
                    </a>
                  </div>
                </footer>
              </MovieContext.Provider>
            }
          />
          <Route path={"/movies/:id"} element={<MovieView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
