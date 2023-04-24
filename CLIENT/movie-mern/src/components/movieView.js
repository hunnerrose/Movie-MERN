import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieView({ movie }) {
  // const [movieData, setMovieData] = useState([]);
  // const [movie, setMovie] = useState([]);
  // const { id, name } = useParams();

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  const convertRuntime = (num) => {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=7b627fa55bf0652f8c45e9da6e8199d1&language=en-US`
  //   )
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       setMovieData(res.data);
  //       setMovie(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  return (
    <div>
      <div className="container mt-5">
        <div className="col-lg-12">
          {/* <!-- Header--> */}
          <header className="mb-4">
            {/* <!-- Movie title--> */}
            <h1 className="fw-bolder mb-1 text-white tex">{movie?.title}</h1>
            {/* <!-- Movie release date--> */}
            <div className="text-muted fst-italic mb-2">
              {new Date(movie?.release_date).toLocaleDateString(
                "en-US",
                dateOptions
              )}
            </div>
            {/* <!-- Movie genres--> */}
            <a
              className="badge bg-secondary text-decoration-none link-light"
              href="#!"
            >
              {movie?.genres?.map((genre) => genre.name).join(", ")}
            </a>
          </header>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div>
              <div class="flex-container">
                <figure className="mb-4 flex-child">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    alt={movie?.title}
                    className="movie-img"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            {/* Fernando, can you figure out how we can display the multiple genres for each movie? I kept getting errors when I put movie.genres, b/c the genres portion is an array of objects. */}

            {/* Genres section */}

            <div className="card mb-4">
              <div className="card-header">Genres</div>
              <div className="card-body">
                <ul className="list-unstyled mb-0 text-center">
                  <li>
                    <a href="#!" className="text-decoration-none link-dark">
                      {movie?.genres?.[0]?.name}
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none link-dark">
                      {movie?.genres?.[1]?.name}
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none link-dark">
                      {movie?.genres?.[2]?.name}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  Production Info Section--> */}
            <div className="card mb-4">
              <div className="card-header">Production Info</div>
              <div className="card-body">
                <ul>
                  <li>Budget: {movie?.budget}</li>
                  <li>Revenue: {movie?.revenue}</li>
                  <li>
                    Production Companies:{" "}
                    {movie?.production_companies?.[0]?.name} |{" "}
                    {movie?.production_companies?.[1]?.name}
                  </li>
                  <li>Run Time: {convertRuntime(movie?.runtime)} minutes</li>
                </ul>
              </div>
            </div>
            {/* <!-- Movie overview section --> */}
            <div className="card mb-4">
              <div className="card-header">Description</div>
              <div className="card-body">
                <p>{movie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Comments section--> */}
        <section className="mb-5 col-lg-12">
          <div className="card bg-light">
            <div className="card-body">
              {/* <!-- Comment form--> */}
              <form className="mb-4">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Join the discussion and leave a comment!"
                ></textarea>
              </form>
              {/* <!-- Comment with nested comments--> */}
              <div className="d-flex mb-4">
                {/* <!-- Parent comment--> */}
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Commenter Name</div>
                  If you're going to lead a space frontier, it has to be
                  government; it'll never be private enterprise. Because the
                  space frontier is dangerous, and it's expensive, and it has
                  unquantified risks.
                  {/* <!-- Child comment 1--> */}
                  <div className="d-flex mt-4">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold">Commenter Name</div>
                      And under those conditions, you cannot establish a
                      capital-market evaluation of that enterprise. You can't
                      get investors.
                    </div>
                  </div>
                  {/* <!-- Child comment 2--> */}
                  <div className="d-flex mt-4">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold">Commenter Name</div>
                      When you put money directly to a problem, it makes a good
                      headline.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single comment--> */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Commenter Name</div>
                  When I look at the universe and all the ways the universe
                  wants to kill us, I find it hard to reconcile that with
                  statements of beneficence.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
