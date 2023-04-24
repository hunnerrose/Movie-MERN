import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieContext } from './movieContext';
import '../index.css';

import Card from 'react-bootstrap/Card';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

  /* when a gallary item is clicked on the gallery should display a 
  full window view of the selected movie. the state should be managed here and sent to gallery.js
  */

  // This makes you scroll to the top of the path when you click on the view details button
  function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scroll(0, 0);
    }, [pathname]);

    return null;
  }

  function HandleClick() {
    window.scroll(0, 0);
  }

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return (
    <ul class='list-unstyled d-flex flex-wrap justify-content-center align-items-stretch'>
      {movies.map((movie) => (
        <div class='col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-1'>
          <div class='card bg-dark text-white border-secondary d-flex flex-column h-100'>
            <img
              class='card-img-top flex-grow-1'
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
            />
            <div class='card-body text-center'>
              <h5 class='card-title text-white'>{movie?.title}</h5>
              <p class='card-text text-secondary'>
                {new Date(movie?.release_date).toLocaleDateString(
                  'en-US',
                  dateOptions
                )}
              </p>
              <Link to={`/movies/${movie?.id}`}>
                <button
                  class='btn btn-outline-light mt-2'
                  onClick={HandleClick}
                >
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
