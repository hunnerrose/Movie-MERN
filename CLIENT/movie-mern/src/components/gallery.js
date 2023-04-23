import "../index.css";
import GalleryItem from "./galleryItem";

export default function Gallery({ setMovieClicked }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <GalleryItem setMovieClicked={setMovieClicked} />
      </div>
    </div>
  );
}


