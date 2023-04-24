import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/movieContext';
import { AiOutlineStar } from 'react-icons/ai';
import '../index.css';

export default function GalleryItem() {
  const { movies } = useContext(MovieContext);

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
    <ul className='list-unstyled d-flex flex-wrap justify-content-center align-items-stretch'>
      {movies.map((movie) => (
        <div className='col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-1'>
          <div className='card bg-dark text-white border-secondary d-flex flex-column h-100'>
            <img
              className='card-img-top flex-grow-1'
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
            />
            <div className='card-body text-center flex flex-col justify-center'>
              <h5 className='card-title text-white'>{movie?.title}</h5>
              <p className='card-text text-secondary'>
                {new Date(movie?.release_date).toLocaleDateString(
                  'en-US',
                  dateOptions
                )}
              </p>
              <p className='card-text text-secondary flex items-center justify-center'>
                <span className='mr-1 mt-[2px] text-yellow-500'>
                  <AiOutlineStar />
                </span>
                {movie?.vote_average} / 10
              </p>
              <Link to={`/movies/${movie?.id}`}>
                <button
                  className='btn btn-outline-light mt-2'
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
