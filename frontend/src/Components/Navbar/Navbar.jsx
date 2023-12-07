import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-3xl font-bold font-heading hover:text-gray-300"
        >
          Your Logo
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 font-medium">
              Početna
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white hover:text-gray-300 font-medium"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white hover:text-gray-300 font-medium"
            >
              Registracija
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white hover:text-gray-300 font-medium"
            >
              Profil
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
