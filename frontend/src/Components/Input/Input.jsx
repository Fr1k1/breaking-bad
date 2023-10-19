const Input = ({
  placeholder,
  label,
  type = "text",
  onChange,
  isDisabledDefault,
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

export default Input;
