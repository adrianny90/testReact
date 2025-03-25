import { useFetchMovie } from "../hooks/useFetch";
import { useParams, Link } from "react-router";
const Movie = () => {
  const { movieId } = useParams();
  const { movie, loading, error } = useFetchMovie(movieId);

  if (loading) {
    return <div className="p-4 text-white">Loading movie data...</div>;
  }

  if (error) {
    return <div className="p-4 text-white">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="p-4 text-white">No movie data found.</div>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link
        to="/"
        className="text-blue-300 hover:text-blue-100 mb-4 inline-block"
      >
        ← Back to movies
      </Link>

      <div className="bg-gray-800 shadow-md rounded-lg p-6 mt-4 text-gray-200">
        <h1 className="text-2xl font-bold mb-2 text-white">{movie.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">
              Information
            </h2>
            <p>
              <span className="font-medium text-gray-300">Release date:</span>{" "}
              {movie.release_date
                ? movie.release_date.substring(0, 4)
                : "Unknown"}
            </p>
            <p>
              <span className="font-medium text-gray-300">Rating:</span>{" "}
              {movie.vote_average || "N/A"}
            </p>
            <p>
              <span className="font-medium text-gray-300">Website:</span>{" "}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-32 h-auto"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
