import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import RenderMovie from "./RenderMovie";
const Home = () => {
  // const { mappedMovies } = useFetch();
  // console.log(`results in Home: ${mappedMovies}`);

  // const renderProducts = (movie, container) => {
  //   if (!movie || !container) return;

  //   // Create the card container
  //   const card = document.createElement("div");
  //   card.className =
  //     "bg-[#6EACDA] rounded-lg shadow-2xl overflow-hidden relative w-full mb-4";

  //   // Favorite Button
  //   const favoriteBtn = document.createElement("button");
  //   favoriteBtn.className = "absolute top-2 right-4 text-white text-2xl";

  //   favoriteBtn.addEventListener("click", () => {
  //     favoriteBtn.innerHTML = favoriteBtn.innerHTML === "❤️" ? "🤍" : "❤️";
  //     storeMovies(movie);
  //   });

  //   // Movie Image
  //   const img = document.createElement("img");
  //   img.className = "w-full h-48 object-cover rounded-md";
  //   img.src = movie.image;
  //   // img.src`https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  //   img.alt = movie.title;

  //   // Movie Release Date & Rating
  //   const movieDetails = document.createElement("p");
  //   movieDetails.className = "text-sm flex items-center mt-2 p-1";
  //   movieDetails.innerHTML = `
  //     📅 <span class="ml-2">${movie.year || "Unknown"}</span>
  //     <span class="ml-auto">⭐ ${movie.rating || "N/A"}</span>
  //   `;

  //   // Movie Title
  //   const title = document.createElement("h2");
  //   title.className = "font-bold text-lg mt-2 p-4";
  //   title.textContent = movie.title;

  //   // Movie Description
  //   const description = document.createElement("p");
  //   description.className = "text-sm opacity-75 mt-1 p-4";
  //   description.textContent =
  //     movie.description?.substring(0, 100) + "..." ||
  //     "No description available.";

  //   // Append Elements
  //   card.appendChild(favoriteBtn);
  //   card.appendChild(img);
  //   card.appendChild(movieDetails);
  //   card.appendChild(title);
  //   card.appendChild(description);
  //   //card.appendChild(addBtn);

  //   container.appendChild(card);
  // };

  // useEffect(() => {
  //   console.log("Movies from useFetch:", mappedMovies);
  //   const productsContainer = document.getElementById("products-container");
  //   if (productsContainer) {
  //     mappedMovies.forEach((movie) => {
  //       renderProducts(movie, productsContainer); // Zakładam state jako false
  //     });
  //   }
  // }, [mappedMovies]);
  return (
    <>
      <header
        id="hero"
        className="bg-[url(./img/bg_img.png)] min-h-[35vh] flex flex-col items-center justify-center gap-10 bg-center bg-cover bg-red-400"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-center text-white">
          AwesomeFilms
        </h1>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main>
          <h1 className="text-center font-bold text-4xl mb-8">
            Popular Movies
          </h1>
          <section>
            <RenderMovie />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
