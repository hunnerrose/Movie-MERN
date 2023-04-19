import React, { useContext } from "react";
import { MovieContext } from "./movieContext";
import "../index.css";

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

  /* when a gallary item is clicked on the gallery should display a 
  full window view of the selected movie. the state should be managed here and sent to gallery.js
  */

  return (
    <ul className="galleryItem">
      {movies.map((movie) => (
        <div key={movie.id} className="item">
          <li>{movie.title}</li>
          <li>{movie.release_date}</li>
          <li>
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        </div>
      ))}
    </ul>
  );
}
