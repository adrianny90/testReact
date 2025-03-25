import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";
const RenderMovie = () => {
  const { movies, loading, error } = useFetch();
  console.log(movies);

  if (loading) {
    return <div className="p-4 text-white">Loading movies data...</div>;
  }

  if (error) {
    return <div className="p-4 text-white">Error: {error}</div>;
  }

  if (!movies || movies.length === 0) {
    return <div className="p-4 text-white">No movies found.</div>;
  }

  return (
    <div className="p-4">
      <div className=" grid grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-blue-600 border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl text-center font-semibold text-white">
              {movie.title}
            </h2>
            <p className="text-gray-300">
              {movie.release_date ? movie.release_date : "Unknown"}
            </p>{" "}
            <a className="text-yellow-400">*{movie.vote_average} </a>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Girl in a jacket"
            />
            <p className="text-gray-300 mb-4">
              {movie.overview || "No description available."}
            </p>
            <Link
              to={`/${movie.id}`}
              className="text-black hover:text-blue-100 font-medium"
            >
              View film →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderMovie;
