import "../index.css";

export default function Gallery({ search, poster }) {
  return (
    <div className="container">
      {search}
      {poster ? (
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={search} />
      ) : (
        <p>No poster available</p>
      )}
    </div>
  );
}
