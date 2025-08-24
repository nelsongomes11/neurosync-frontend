import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="font-bold flex justify-center text-xl text-white bg-zinc-900 fixed w-full">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/auth">Login/Register</Link>
    </nav>
  );
};

export default NavBar;
