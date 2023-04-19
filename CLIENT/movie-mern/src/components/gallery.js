import "../index.css";
import GalleryItem from "./galleryItem";

export default function Gallery({ movies }) {
  /* 
    if no item is clicked ? <GalleryItem /> : display full view of clicked item.
    Here we will display more data, i.e., image, description, and genre.
  */

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
