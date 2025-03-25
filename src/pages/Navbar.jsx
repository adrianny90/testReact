import { Link } from "react-router";
const Navbar = () => {
  return (
    <>
      <nav
        id="navbar"
        className="flex justify-between items-center py-3 px-4 md:px-12 bg-[#021526]"
      >
        <div id="logo" className="text-white text-xl md:text-3xl font-black">
          AwesomeFilms
        </div>
        <ul
          id="links"
          className="hidden md:flex flex-between gap-4 text-white text-xl"
        >
          <li>
            <Link to="/" className="underline hover:text-fuchsia-400">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/journal" className="hover:text-fuchsia-400">
              Favorites
            </Link>
          </li>
        </ul>
        <div id="burger" className="block w-[25px] md:hidden">
          <img src="./img/burger-bar.png" alt="burger menu" />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
