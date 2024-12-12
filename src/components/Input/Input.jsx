import "./Input.css";

function Input(props) {
  const { 
    type = "text", 
    placeholder = "", 
    value = "", 
    onChange, 
    disabled = false, 
    label = "", 
    danger = false 
  } = props;

  const className = `my-input ${danger ? "my-input--danger" : ""} ${disabled ? "my-input--disabled" : ""}`;

  return (
    <div className="input-container">
      {label && <label className={`input-label ${danger ? "input-label--danger" : ""}`}>{label}</label>}
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
