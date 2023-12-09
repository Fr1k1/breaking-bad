import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedin, setIsLoggedin] = useState(
    localStorage.getItem("user_id") !== null
  );

  useEffect(() => {
    // Update the state when local storage changes
    setIsLoggedin(localStorage.getItem("user_id") !== null);
  }, [localStorage.getItem("user_id")]);
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="text-white text-3xl font-bold font-heading hover:text-gray-300"
        >
          Breaking bad
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

          {isLoggedin ? (
            <Link to="/dodaj-posao">
              <label className="cursor-pointer p-2 border border-white rounded w-32 text-center bg-yellow-light text-white font-bold px-4">
                <button className="" />
                Dodaj posao
              </label>
            </Link>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
