import { Outlet } from "react-router";
import Navbar from "../pages/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <footer className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
        <p>@ 2025 Movie Diary. All rights reserved.</p>
      </footer>
    </>
  );
};
export default Layout;
