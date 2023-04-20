import { useState, useEffect } from 'react';
import { MovieContext } from './components/movieContext';
import SideBar from './components/sideBar';
import Gallery from './components/gallery';
import NavBar from './components/NavBar';

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
    <div>
      <NavBar />
        <MovieContext.Provider value={{ movies }}>
          <div className="appContainer">
            <SideBar query={query} setQuery={setQuery} />
            <Gallery />
          </div>
        </MovieContext.Provider>
    </div>
  )
}
