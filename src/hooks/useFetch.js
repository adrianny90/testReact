import { useEffect, useState } from "react";

const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQxMGVjZWU0ODcxNTBhMDUwMDAwM2Q5YmZlNmE5NCIsIm5iZiI6MTc0MTY4MzE3MS40NDMsInN1YiI6IjY3Y2ZmOWUzNmVjZWM1ZjM5YTgxMWNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ap9QK8ZdTMfLM7lihBfTdN7G3SxvRbkaBhGLNCCHcaM"; // Replace with your actual TMDB API key
const BASE_URL = "https://api.themoviedb.org/3";

const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
        setMovies([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchingMovies();
    return () => {
      ignore = true;
    };
  }, []);

  return { movies, loading, error };
};

const useFetchMovie = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;

      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError(error.message);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { movie, loading, error };
};
export { useFetch, useFetchMovie };
