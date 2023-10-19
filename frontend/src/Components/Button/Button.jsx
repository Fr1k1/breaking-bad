import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="p-2 bg-purple-300 rounded-md w-fit" type="submit">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
