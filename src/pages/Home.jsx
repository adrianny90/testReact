import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
const Home = () => {
  const { movies, loading, error } = useFetch();
  console.log(`results in Home: ${movies}`);

  const renderProducts = (movie, container) => {
    if (!movie || !container) return;

    // Create the card container
    const card = document.createElement("div");
    card.className =
      "bg-[#6EACDA] rounded-lg shadow-2xl overflow-hidden relative w-full mb-4";

    // Favorite Button
    const favoriteBtn = document.createElement("button");
    favoriteBtn.className = "absolute top-2 right-4 text-white text-2xl";
    // if (status) {
    //   favoriteBtn.innerHTML = "❤️"; // Default to empty heart
    // } else {
    //   favoriteBtn.innerHTML = "🤍"; // Default to empty heart
    // }

    favoriteBtn.addEventListener("click", () => {
      favoriteBtn.innerHTML = favoriteBtn.innerHTML === "❤️" ? "🤍" : "❤️";
      storeMovies(movie);
    });

    // Movie Image
    const img = document.createElement("img");
    img.className = "w-full h-48 object-cover rounded-md";
    img.src = movie.image;
    // img.src`https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = movie.title;

    // Movie Release Date & Rating
    const movieDetails = document.createElement("p");
    movieDetails.className = "text-sm flex items-center mt-2 p-1";
    movieDetails.innerHTML = `
      📅 <span class="ml-2">${movie.year || "Unknown"}</span>
      <span class="ml-auto">⭐ ${movie.rating || "N/A"}</span>
    `;

    // Movie Title
    const title = document.createElement("h2");
    title.className = "font-bold text-lg mt-2 p-4";
    title.textContent = movie.title;

    // Movie Description
    const description = document.createElement("p");
    description.className = "text-sm opacity-75 mt-1 p-4";
    description.textContent =
      movie.description?.substring(0, 100) + "..." ||
      "No description available.";

    // Append Elements
    card.appendChild(favoriteBtn);
    card.appendChild(img);
    card.appendChild(movieDetails);
    card.appendChild(title);
    card.appendChild(description);
    //card.appendChild(addBtn);

    container.appendChild(card);
  };

  useEffect(() => {
    if (!error) {
      console.log("Movies from useFetch:", movies);
      const productsContainer = document.getElementById("products-container");
      if (productsContainer) {
        movies.forEach((movie) => {
          renderProducts(movie, productsContainer); // Zakładam state jako false
        });
      }
    }
  }, [movies]);
  return (
    <>
      <header
        id="hero"
        className="bg-[url(./img/bg_img.png)] min-h-[50vh] flex flex-col items-center justify-center gap-10 bg-center bg-cover bg-red-400"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-center text-white">
          AwesomeFilms
        </h1>
        {loading && <p>Loading movies...</p>}
        {error && <p>Error: {error}</p>}
        <div
          id="Searchbar"
          className="bg-white relative rounded-full flex items-center gap-4 pr-3 pl-3 py-1"
        >
          <input
            type="text"
            id="searchField"
            name="searchfield"
            placeholder="Search movie..."
            className="outline-none flex-1" // Dodano styl, aby input był bardziej responsywny
          />
          <a id="searchBtn" className="hover:cursor-pointer">
            <img
              src="./img/icon_search.png"
              id="searchIcon"
              alt="search icon"
              className="w-[20px] h-[100%]"
            />
          </a>
          <div
            id="searchResults"
            className="hidden absolute top-[110%] left-[50%] translate-x-[-50%] w-[80vw] md:w-[50vw] bg-white rounded shadow p-4"
          >
            <div className="flex justify-between">
              <span className="font-bold">Results</span>
              <a id="searchCloseBtn" className="hover:cursor-pointer">
                <img
                  src="./img/close.png"
                  alt="close"
                  className="w-[15px] ml-auto mb-4"
                />
              </a>
            </div>
            <ul
              id="resultList"
              className="max-h-[29vh] text-sm md:text-xl overflow-auto"
            ></ul>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main>
          <h1 className="text-center font-bold text-4xl mb-8">
            Popular Movies
          </h1>
          <section
            id="products-container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          ></section>
        </main>
      </div>
    </>
  );
};

export default Home;
