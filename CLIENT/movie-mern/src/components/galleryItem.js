import React, { useContext, useState } from 'react';
import { MovieContext } from './movieContext';
import '../index.css';

import Card from 'react-bootstrap/Card';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);
  const [isExpanded, setIsExpanded] = useState(false);

  /* when a gallary item is clicked on the gallery should display a 
  full window view of the selected movie. the state should be managed here and sent to gallery.js
  */

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };

  const expandedStyle = {
    //   width: "80vw",
    //   height: "20vh",
    //   border: "1px solid black",
    //   margin: "2px",
    //   // backgroundImage: https://image.tmdb.org/t/p/w154/${movie.poster_path},
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    fontSize: '5rem',
    color: 'red',
  };

  // const expandedView = ({ movies }) => (
  //   <div className={expandedStyle}>
  //     <h3>{movies.title}</h3>
  //   </div>
  // );

  // move to its in js file
  const ExpandedView = () => (
    <div className={expandedStyle}>
      <h3>{movies[0].title}</h3>
      {/* just an example, replace with the correct movie title */}
    </div>
  );

  const card = (
    <ul className='d-flex flex-row flex-wrap'>
      {movies.map((movie) => (
        <Card
          style={{ width: '13rem' }}
          border='secondary'
          key={movie.id}
          className='m-2'
        >
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className='text-muted mt-1'>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };
  return (
    <div onClick={handleClick}>{isExpanded ? <ExpandedView /> : card}</div>
  );
}
