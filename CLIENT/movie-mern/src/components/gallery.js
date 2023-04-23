import GalleryItem from "./galleryItem";
import "../index.css";

export default function Gallery({
  setMovieClicked,
  selectedMovie,
  setSelectedMovie,
}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <GalleryItem
          setMovieClicked={setMovieClicked}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </div>
  );
}


