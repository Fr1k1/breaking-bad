import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col p-3 bg-gray-500">
        <ul className="flex flex-row gap-3 justify-center items-center">
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Registration</Link>
          </li>

          <li>
            <Link to="/">Homepage</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
