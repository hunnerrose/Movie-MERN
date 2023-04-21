import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function MovieView ({movies}) {
    const [movieData, setMovieData] = useState([]);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const dateOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7b627fa55bf0652f8c45e9da6e8199d1&language=en-US`)
            .then(response => response.json())
            .then((res) => {
                console.log(res)
                setMovieData(res.data);
                setMovie(res);
            })
            .catch((err) => console.log(err));
            
    }, [id])

    return (
        <div>
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
                    className='cardImg'
                />
                <Card.Body>
                    <Card.Title className='text-white'>{movie.title}</Card.Title>
                    <Card.Subtitle className='text-muted mt-1'>
                    {new Date(movie.release_date).toLocaleDateString(
                        'en-US',
                        dateOptions
                    )}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
            {/* <h1>{movie.title}</h1>
            <img className="movie-view-img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <h6>{movie.overview}</h6> */}
        </div>
    )
}