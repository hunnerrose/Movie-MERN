import GalleryItem from "./galleryItem";
import "../index.css";

export default function Gallery({
  setMovieClicked,
  selectedMovie,
  setSelectedMovie,
  movies,
}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <ul className="d-flex flex-row flex-wrap">
          {movies.map((movie) => (
            <GalleryItem
              key={movie.id}
              movie={movie}
              setMovieClicked={setMovieClicked}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
