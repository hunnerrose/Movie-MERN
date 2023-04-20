import "../index.css";
import GalleryItem from "./galleryItem";

export default function Gallery({ movies }) {
  return (
    <div className="container-fluid">
      <div className="row">{<GalleryItem />}</div>
    </div>
  );
}
