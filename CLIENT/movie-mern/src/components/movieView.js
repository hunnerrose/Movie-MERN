import "../index.css";

export default function MovieView({ movie }) {
  return (
    <div className="movieView-container">
      <h3>{movie.title}</h3>
      <img
        variant="top"
        src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.release_date}</p>
    </div>
  );
}
