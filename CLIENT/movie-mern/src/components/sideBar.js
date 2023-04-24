import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "../index.css";
import { InputText } from "primereact/inputtext";

export default function SideBar({ query, setQuery, setMovies }) {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  // popular api
  const fetchPopularMovies = async () => {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
    const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";

    const response = await fetch(`${API_URL}${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setMovies(data.results);
    setVisibleCustomToolbar(false);
  };

  // now playing api
  const fetchNowPlayingMovies = async () => {
    const API_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
    const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";

    const response = await fetch(`${API_URL}${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setMovies(data.results);
    setVisibleCustomToolbar(false);
  };

  // upcoming api
  const fetchUpcomingMovies = async () => {
    const API_URL = "https://api.themoviedb.org/3/movie/upcoming";
    const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    setMovies(data.results);
    setVisibleCustomToolbar(false);
  };

  // top rated api
  const fetchTopRatedMovies = async () => {
    const API_URL = "https://api.themoviedb.org/3/movie/top_rated";
    const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";

    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    setMovies(data.results);
    setVisibleCustomToolbar(false);
  };

  return (
    <div>
      <Sidebar
        visible={visibleCustomToolbar}
        onHide={() => setVisibleCustomToolbar(false)}
        style={{
          backgroundColor: "#243b55",
        }}
      >
        <h3 className="mb-4 text-white">SHMOVIE FANATICS</h3>
        <span className="p-float-label p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            id="lefticon"
            value={query}
            setQuery={setQuery}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: "17.2rem" }}
          />
          <label htmlFor="lefticon">Search for a movie</label>
        </span>
        <Button
          className="mt-3"
          style={{ width: "17.2rem" }}
          onClick={fetchPopularMovies}
        >
          Popular Movies
        </Button>
        <Button
          className="mt-3"
          style={{ width: "17.2rem" }}
          onClick={fetchNowPlayingMovies}
        >
          Now Playing
        </Button>
        <Button
          className="mt-3"
          style={{ width: "17.2rem" }}
          onClick={fetchUpcomingMovies}
        >
          Upcoming
        </Button>
        <Button
          className="mt-3"
          style={{ width: "17.2rem" }}
          onClick={fetchTopRatedMovies}
        >
          Top Rated
        </Button>
      </Sidebar>
      <Button
        icon="pi pi-chevron-right"
        onClick={() => setVisibleCustomToolbar(true)}
        className="m-3 p-button-text"
      />
    </div>
  );
}
