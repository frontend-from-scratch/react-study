import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button";
  variant?: "text" | "outlined" | "contained";
  size: "small" | "medium" | "large";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "info"
    | "warning";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingPosition?: "start" | "end" | "center";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "outlined",
  size = "large",
  color = "info",
  disabled = false,
  startIcon,
  endIcon,
  loading = false,
  loadingPosition = "center",
  fullWidth = false,
}) => {
  return <button type={type}>{children}</button>;
};

export default Button;
