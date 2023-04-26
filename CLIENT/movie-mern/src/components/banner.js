import { Link } from "react-router-dom";

export default function Banner({ selectedMovie }) {
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  return (
    <>
      <div className="w-full h-[550px] text-white mb-4 relative">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
          alt={selectedMovie?.title}
        />
        <div className="absolute bottom-0 p-4 md:p-8">
          <h1
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent 
      from-teal-300 to-white"
          >
            {selectedMovie?.title}
          </h1>
          <p className="text-gray-300 text-lg my-2">
            {new Date(selectedMovie?.release_date).toLocaleDateString(
              "en-US",
              dateOptions
            )}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-lg ">
            {selectedMovie?.overview}
          </p>
          <Link to={`/movies/${selectedMovie?.id}`}>
            <div className="my-4">
              <button className="hover:scale-110 duration-200 border text-white border-blue-500 py-3 px-5 rounded-md">
                View More
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}