import PropTypes from "prop-types";

const Input = ({
  placeholder,
  label,
  type = "text",
  onChange,
  //isDisabledDefault,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="text-grey-custom">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={defaultValue}
        className="bg-white-custom border border-grey-middle rounded-lg py-2 px-3 focus:outline-none focus:border-yellow-light transition duration-300"
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  onChange: PropTypes.func,
  //isDisabledDefault: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default Input;
