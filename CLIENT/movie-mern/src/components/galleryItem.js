import React, { useContext, useState } from "react";
import { MovieContext } from "./movieContext";
import MovieView from "./movieView";
import "../index.css";

import Card from "react-bootstrap/Card";

export default function GalleryItem({ setMovieClicked }) {
  const { movies } = useContext(MovieContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
          style={{ width: "10rem" }}
          border="secondary"
          key={movie.id}
          className="m-2"
          onClick={() => setSelectedMovie(movie)} // set the clicked movie as the new state value
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
          </Card.Body>
        </Card>
      ))}
    </ul>
  );

  const handleClick = (movie) => {
    setIsExpanded(!isExpanded);
    setMovieClicked(true);
  };
  return (
    <div onClick={handleClick}>
      {isExpanded ? <MovieView movie={selectedMovie} /> : card}
    </div>
  );
}
