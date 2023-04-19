import "../index.css";
import GalleryItem from "./galleryItem";

export default function Gallery({ movies }) {
  return (
    <div className="container">
      <GalleryItem />

      {/*poster ? (
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={search} />
      ) : (
        <p>No poster available</p>
      )*/}
    </div>
  );
}
