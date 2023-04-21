export default function Banner({ selectedMovie, movieClicked }) {
  const BACKDROP_IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  return (
    <>
      {movieClicked ? null : (
        <div
          className="movie-display"
          style={{
            backgroundImage: `url(${BACKDROP_IMG_PATH}${selectedMovie.backdrop_path})`,
          }}
        >
          <div className="movie-content">
            <h1 className="movie-content-title">{selectedMovie.title}</h1>
            <p className="text-white">{selectedMovie.overview}</p>
            <p className="text-white">
              {new Date(selectedMovie.release_date).toLocaleDateString(
                "en-US",
                dateOptions
              )}
            </p>
            <p className="text-white">
              <i className="pi pi-star text-warning" />{" "}
              {selectedMovie.vote_average}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
