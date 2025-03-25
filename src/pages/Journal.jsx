const Journal = () => {
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
            Favourite Movies
          </h1>
          <section
            id="favourite-container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          ></section>
        </main>
      </div>
    </>
  );
};

export default Journal;
