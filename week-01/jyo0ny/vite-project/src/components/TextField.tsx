import React from "react";

interface TextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  readOnly?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  label,
  helperText,
  error = false,
  disabled = false,
  required = false,
  variant = "standard",
  size = "large",
  readOnly = false,
}) => {
  // console.log(TextField);
  return (
    <div className={`textfield-container ${variant} ${size}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        className={`textfield ${error ? "error" : ""}`}
      />
      {helperText && <p>{helperText}</p>}
      {error && <div className="error-message">잘못된 접근입니다.</div>}
    </div>
  );
};

export default TextField;
