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
    <ul className='d-flex flex-row flex-wrap'>
      {movies.map((movie) => (
        <Card
          style={{ height: 'auto' }}
          border='secondary'
          key={movie.id}
          className='mx-auto my-2'
          bg='dark'
        >
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={movie.title}
            className='cardImg'
          />

          <Card.Body className='text-center'>
            <Card.Title className='text-white'>{movie.title}</Card.Title>
            <Card.Subtitle className='text-secondary my-2'>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </Card.Subtitle>
            <Link to={`/movies/${movie.id}`}>
              <button
                className='hover:scale-110 duration-200 border text-white border-blue-500 mt-2 py-2 px-4 rounded-md'
                onClick={HandleClick}
              >
                View More
              </button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
