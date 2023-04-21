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
        <div /* could make this a component and pass it into gallery/galleryItem - onclick remove */
          id="movie-display"
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
          </div>
        </div>
      )}
    </>
  );
}
