import React, { useContext, useState } from 'react';
import { MovieContext } from './movieContext';
import '../index.css';
import { Modal, Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
          style={{ width: '20rem' }}
          border='secondary'
          key={movie.id}
          className='mx-auto m-2'
          bg='dark'
        >
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <Card.Body>
            <Card.Title className='text-white'>{movie.title}</Card.Title>
            <Card.Subtitle className='text-muted mt-1'>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </Card.Subtitle>

            <button
              type='button'
              className='btn btn-secondary mt-2'
              onClick={handleShow}
            >
              View More
            </button>

            <Modal
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
