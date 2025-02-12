import React from "react";
import { FadeLoader } from "react-spinners";

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  disabled?: boolean;
  loading?: boolean;
  loadingPosition?: "start" | "center" | "end";
  fullWidth?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "small",
  color = "primary",
  disabled = false,
  loading = false,
  loadingPosition = "start",
  fullWidth = false,
  onClick,
  children = "Button",
}) => {
  const buttonClass = [
    "button",
    variant,
    size,
    color,
    fullWidth ? "full-width" : "",
    disabled ? "disabled" : "",
    loading ? "loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && loadingPosition === "center" ? <FadeLoader /> : children}
      {loading && loadingPosition === "end" && <FadeLoader />}
    </button>
  );
};

export default Button;
