import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button
      className="px-4 py-2 bg-yellow-dark rounded-md text-white mt-4 hover:bg-yellow-light"
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
