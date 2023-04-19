<<<<<<< HEAD

=======
import { useState, useEffect } from "react";
import { MovieContext } from "./components/movieContext";
import SideBar from "./components/sideBar";
import Gallery from "./components/gallery";
>>>>>>> parent of 9d9f99a (added side bar)

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const API_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=7b627fa55bf0652f8c45e9da6e8199d1';

  useEffect(() => {
    if (query !== '') {
      fetch(`${API_URL}&query=${query}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [query]);

  return (
    <MovieContext.Provider value={{ movies }}>
<<<<<<< HEAD
=======
      <div className="appContainer">
        <SideBar query={query} setQuery={setQuery} />
        <Gallery />
>>>>>>> parent of 9d9f99a (added side bar)
      </div>
    </MovieContext.Provider>
  );
}

export default App;
