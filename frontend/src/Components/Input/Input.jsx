const Input = ({
  placeholder,
  label,
  type = "text",
  onChange,
  isDisabledDefault,
  defaultValue,
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="label-main">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={defaultValue}
        className="flex bg-green-500"
      />
    </div>
  );
};

export default Input;
