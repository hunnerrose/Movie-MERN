import React, { useContext, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { MovieContext } from "../context/movieContext";
import "../index.css";
import MovieView from "./movieView";

export default function GalleryItem({
  setMovieClicked,
  selectedMovie,
  setSelectedMovie,
}) {
  const { movies } = useContext(MovieContext); // handles
  const [isExpanded, setIsExpanded] = useState(false);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (movie) => {
    setClickedMovie(movie);
    setShowModal(true);
  };

  const handleMovieClick = (movie) => {
    setIsExpanded(!isExpanded);
    setMovieClicked(true);
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setClickedMovie(null);
    setShowModal(false);
  };

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  const card = (
    <ul className="d-flex flex-row flex-wrap">
      {movies.map((movie) => (
        <Card
          style={{ width: "20rem" }}
          border="secondary"
          key={movie.id}
          className="mx-auto m-2"
          bg="dark"
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <Card.Body>
            <Card.Title className="text-white">{movie.title}</Card.Title>
            <Card.Subtitle className="text-muted mt-1">
              {new Date(movie.release_date).toLocaleDateString(
                "en-US",
                dateOptions
              )}
            </Card.Subtitle>

            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={() => handleShowModal(movie)}
            >
              View More
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={() => handleMovieClick(movie)}
            >
              MovieView
            </button>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );

  return (
    <div>
      {isExpanded ? <MovieView movie={selectedMovie} /> : card}

      {clickedMovie && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{clickedMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`https://image.tmdb.org/t/p/w342/${clickedMovie.poster_path}`}
              alt={clickedMovie.title}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
