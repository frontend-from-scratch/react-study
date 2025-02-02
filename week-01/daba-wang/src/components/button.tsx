import React from "react";
import { cn } from "../lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary" | "error" | "success" | "info" | "warning";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingPosition?: "start" | "end" | "center";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "medium",
  color = "default",
  disabled = false,
  startIcon,
  endIcon,
  loading = false,
  loadingPosition = "center",
  fullWidth = false,
  children,
}) => {
  const baseStyles = "flex items-center justify-center rounded-lg font-medium transition-all";
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }[size];

  const colorStyles = {
    default: "bg-gray-200 text-black hover:bg-gray-300",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    error: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    info: "bg-cyan-600 text-white hover:bg-cyan-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
  }[color];

  const variantStyles = {
    text: "bg-transparent text-black hover:bg-gray-100",
    outlined: "border border-current bg-transparent hover:bg-gray-100",
    contained: colorStyles,
  }[variant];

  const disabledStyles = disabled || loading ? "opacity-50 cursor-not-allowed" : "";
  const fullWidthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(baseStyles, sizeStyles, variantStyles, disabledStyles, fullWidthStyles)}
      disabled={disabled || loading}
    >
      {loading && loadingPosition === "start" && <Loader2 className="animate-spin mr-2" />}
      {!loading || loadingPosition !== "center" ? startIcon : null}
      {loading && loadingPosition === "center" ? <Loader2 className="animate-spin" /> : children}
      {!loading || loadingPosition !== "center" ? endIcon : null}
      {loading && loadingPosition === "end" && <Loader2 className="animate-spin ml-2" />}
    </button>
  );
};

const ButtonShowcase: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Button variant="contained" color="primary">Primary Button</Button>
      <Button variant="outlined" color="secondary">Outlined Button</Button>
      <Button variant="text" color="error">Text Button</Button>
      <Button variant="contained" color="success" size="large">Large Success Button</Button>
      <Button variant="outlined" color="info" size="small">Small Info Button</Button>
      <Button variant="contained" color="warning" loading>Loading Button</Button>
      <Button variant="contained" color="primary" startIcon={<Loader2 />}>Start Icon Button</Button>
      <Button variant="contained" color="secondary" endIcon={<Loader2 />}>End Icon Button</Button>
      <Button variant="contained" color="error" fullWidth>Full Width Button</Button>
    </div>
  );
};

export { Button, ButtonShowcase };
export default ButtonShowcase;
