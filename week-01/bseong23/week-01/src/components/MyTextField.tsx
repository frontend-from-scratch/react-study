import React from "react"
import "./MyTextField.css"

interface MyTextFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: "text" | "password" | "email" | "number" | "tel"
  placeholder?: string
  label?: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  required?: boolean
  variant?: "outlined" | "filled" | "standard"
  size?: "small" | "medium"
  readOnly?: boolean
  name?: string
  id?: string
  className?: string
}

const MyTextField: React.FC<MyTextFieldProps> = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
  label,
  helperText,
  error = false,
  disabled = false,
  required = false,
  variant = "outlined",
  size = "medium",
  readOnly = false,
  name,
  id,
  className = "",
}) => {
  const inputClasses = [
    "input-field",
    variant,
    size,
    error ? "error" : "",
    readOnly ? "readonly" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const labelClasses = [
    "input-label",
    error ? "error" : "",
    disabled ? "disabled" : "",
    required ? "required" : "",
  ]
    .filter(Boolean)
    .join(" ")

  const helperTextClasses = ["helper-text", error ? "error" : ""]
    .filter(Boolean)
    .join(" ")

  return (
    <div className="input-container">
      {label && <label className={labelClasses}>{label}</label>}
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          className={inputClasses}
          name={name}
          id={id}
        />
      </div>
      {helperText && <span className={helperTextClasses}>{helperText}</span>}
    </div>
  )
}

export default MyTextField
