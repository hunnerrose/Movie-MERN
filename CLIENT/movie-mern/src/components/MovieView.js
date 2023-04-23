import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


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
              <header
                id='header'
                className='mb-2 mx-5'
              >
                <div className='d-flex align-items-center justify-content-between'>
                  <a href='/'>
                    <img
                      className='logo'
                      src='https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230421%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230421T002509Z&X-Amz-Expires=19894&X-Amz-Signature=0adc59afcf6a893d961af662ee59a6c76bdf645ab228b2e553dc019090ec2b75&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2021%20Apr%202023%2005%3A56%3A43%20GMT'
                      alt='logo'
                    />
                  </a>
                  <span className='p-float-label p-input-icon-left mb-3'>
                    <i className='pi pi-search' />
                  </span>
                </div>
              </header>
        <div className="container mt-5">
            <div className="col-lg-12">
                {/* <!-- Header--> */}
                <header className="mb-4">
                            {/* <!-- Movie title--> */}
                            <h1 className="fw-bolder mb-1">{movie.title}</h1>
                            {/* <!-- Movie release date--> */}
                            <div className="text-muted fst-italic mb-2">
                                {new Date(movie.release_date).toLocaleDateString(
                                    'en-US',
                                    dateOptions
                                )}
                            </div>
                            {/* <!-- Movie genres--> */}
                            <a className="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                            <a className="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                        </header>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    {/* <!-- Movie content--> */}
                    <div>
                        {/* <!-- Movie poster--> */}
                        <div class="flex-container">
                            <figure className="mb-4 flex-child">
                                <img  
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    className='movie-img'
                                />          
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7">

                    {/* Fernando, can you figure out how we can display the multiple genres for each movie? I kept getting errors when I put movie.genres, b/c the genres portion is an array of objects. */}
                    {/* <!-- Genres section--> */}
                    <div className="card mb-4">
                        <div className="card-header">Genres</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Production Info Section--> */}
                    <div className="card mb-4">
                        <div className="card-header">Production Info</div>
                        <div className="card-body">
                            <ul>
                                <li>Budget: {movie.budget}</li>
                                <li>Revenue: {movie.revenue}</li>
                                <li>Production Companies:
                                    
                                </li>
                                <li>Run Time: {movie.runtime} minutes</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Movie overview section --> */}
                    <div className="card mb-4">
                        <div className="card-header">Overview</div>
                        <div className="card-body">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Comments section--> */}
            <section className="mb-5 col-lg-12">
                        <div className="card bg-light">
                            <div className="card-body">
                                {/* <!-- Comment form--> */}
                                <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                {/* <!-- Comment with nested comments--> */}
                                <div className="d-flex mb-4">
                                    {/* <!-- Parent comment--> */}
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                        {/* <!-- Child comment 1--> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                            </div>
                                        </div>
                                        {/* <!-- Child comment 2--> */}
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                When you put money directly to a problem, it makes a good headline.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single comment--> */}
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
        <footer class='footer d-flex justify-content-center'>
            <div><p className='text-white'>
                  &copy; {new Date().getFullYear()} SHMOVIE FANATICS {''}
                </p>
                <p className='text-white'>
                  <i className='pi pi-github' />
                </p></div>
        </footer>
        </div>
    )
}