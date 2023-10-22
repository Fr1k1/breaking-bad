import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-700 rounded-md w-fit text-white"
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
