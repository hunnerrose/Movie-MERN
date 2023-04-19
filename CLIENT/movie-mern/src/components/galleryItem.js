import React, { useContext } from 'react';
import { MovieContext } from './movieContext';
import '../index.css';

import Card from 'react-bootstrap/Card';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

  /* when a gallary item is clicked on the gallery should display a 
  full window view of the selected movie. the state should be managed here and sent to gallery.js
  */

  return (
    <ul className='galleryItem'>
      {movies.map((movie) => (
        <Card
          style={{ width: '15rem' }}
          key={movie.id}
          className='item'
        >
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <li>
              <Card.Img
                className='image'
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
            <Card.Subtitle className='mt-2 text-muted'>
              {movie.release_date}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
