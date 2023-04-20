import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
// import SearchBar from "./SearchBar";
import "../index.css";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=7b627fa55bf0652f8c45e9da6e8199d1";

export default function SideBar({ query, setQuery, setMovies }) {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  const handleSearch = () => {
    const apiURL = `${API_URL}&query=${query}`;
    if (query !== "") {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          // Update the query and the movies state based on the response
          setQuery(query);
          setMovies(data.results);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Sidebar
        visible={visibleCustomToolbar}
        onHide={() => setVisibleCustomToolbar(false)}
      >
        <h3 className="mb-3">SHMOVIE FANATICS</h3>
        <div>
          <input type="text" value={query} onChange={handleInput} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </Sidebar>
      <Button
        icon="pi pi-chevron-right"
        onClick={() => setVisibleCustomToolbar(true)}
        className="m-3 p-button-text"
      />
    </div>
  );
}
