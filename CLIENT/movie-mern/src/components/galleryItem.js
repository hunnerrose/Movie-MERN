import React, { useContext } from 'react';
import { MovieContext } from './movieContext';
import '../index.css';

import Card from 'react-bootstrap/Card';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

  /* when a gallary item is clicked on the gallery should display a 
  full window view of the selected movie. the state should be managed here and sent to gallery.js
  */

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return (
    <ul className='galleryItem'>
      {movies.map((movie) => (
        <Card
          border='secondary'
          style={{ width: '15rem' }}
          key={movie.id}
          className='m-2'
        >
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className='mt-2 text-muted'>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </Card.Subtitle>
            <Card.Img
              className='card-img mt-2'
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt={movie.title}
            />
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
