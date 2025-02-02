import React from "react";

interface ButtonProps {
  children: React.ReactNode;
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
  variant = "outlined",
  size = "large",
  color = "info",
  disabled = false,
  startIcon,
  endIcon,
  loading = false,
  loadingPosition = "center",
  fullWidth = true,
}) => {
  // 버튼이 로딩 중이거나 disabled이면 버튼은 비활성화됩니다.
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {loading && loadingPosition === "start" && <span>Loading...</span>}
      {!loading && startIcon && <span>{startIcon}</span>}
      {loading && loadingPosition === "center" ? (
        <span>Loading...</span>
      ) : (
        <span>{children}</span>
      )}

      {!loading && endIcon && <span>{endIcon}</span>}
      {loading && loadingPosition === "end" && <span>Loading...</span>}
    </button>
  );
};

export default Button;
