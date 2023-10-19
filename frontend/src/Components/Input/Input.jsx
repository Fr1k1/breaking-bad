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
    <div className="flex gap-2 flex-col">
      {label && <label className="">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={defaultValue}
        className="flex bg-white-200 rounded-lg p-1"
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
