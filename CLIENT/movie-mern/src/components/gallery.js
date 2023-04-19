import '../index.css';
import GalleryItem from './galleryItem';

export default function Gallery({ movies }) {
  /* 
    if no item is clicked ? <GalleryItem /> : display full view of clicked item.
    Here we will display more data, i.e., image, description, and genre.
  */

  return (
    <div className='container-fluid'>
      <div className='row'>
        <GalleryItem />
      </div>
    </div>
  );
}
