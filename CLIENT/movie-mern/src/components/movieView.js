<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Footer from "./footer";
import Comments from "./comments";
=======
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
import Footer from "./footer";
import Comments from "./comments";
import GenreDisplay from "./genre";
import ProductionInfo from "./productionInfo";
import MovieOverView from "./movieOverview";
import MovieViewPoster from "./movieViewPoster";
import HeaderGenre from "./headerGenre";

export default function MovieView({ movies }) {
  const [movie, setMovie] = useState([]);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7b627fa55bf0652f8c45e9da6e8199d1&language=en-US`
    )
      .then((response) => response.json())
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {/* Header */}

      <div className="">
        <a href="/" className="text-decoration-none text-white">
          <h3 className="text-white py-3 px-3">SHMOVIE FANATICS</h3>
        </a>
      </div>

      <div className="container mt-5">
        <div className="col-lg-12">
          {/* <!-- Header--> */}
          <header className="mb-4">
            {/* <!-- Movie title--> */}
            <div className="d-flex justify-content-center mb-4">
              <a
                href="/"
                className="hover:scale-110 duration-200 border text-white border-blue-500 mt-2 py-2 px-4 rounded-md mr-4 no-underline"
              >
                Home
              </a>
            </div>

            <h1 className="fw-bolder mb-1 text-white text-center">
              {movie?.title}
            </h1>
            {/* <!-- Movie release date--> */}
            <div className="text-center text-secondary fst-italic mb-2">
              {new Date(movie?.release_date).toLocaleDateString(
                "en-US",
                dateOptions
              )}
            </div>

            <HeaderGenre movie={movie} />
          </header>
        </div>
        <div className="row">
          <MovieViewPoster movie={movie} />

          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <GenreDisplay movie={movie} />

            <ProductionInfo movie={movie} />

            {/* <!-- Movie overview section --> */}
            <MovieOverView movie={movie} />
          </div>
        </div>

        <Comments
          setNewComment={setNewComment}
          setComment={setComment}
          newComment={newComment}
          comment={comment}
        />
      </div>
      <Footer />
    </div>
  );
}
