import React from "react"
import "./MyButton.css"

interface MyButtonProps {
  variant?: "contained" | "outlined" | "text"
  size?: "small" | "medium" | "large"
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success"
  disabled?: boolean
  position?: "start" | "center" | "end"
  loading?: boolean
  loadingPosition?: "start" | "center" | "end"
  fullWidth?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const MyButton: React.FC<MyButtonProps> = ({
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  position = "center",
  loading = false,
  loadingPosition = "start",
  fullWidth = false,
  onClick,
  children = "Button",
}) => {
  const buttonClass = [
    "button",
    variant,
    color,
    size,
    `position-${position}`,
    fullWidth ? "fullWidth" : "",
  ]
    .filter(Boolean)
    .join(" ")

  const LoadingSpinner = () => (
    <div className={`spinner position-${loadingPosition}`} />
  )

  return (
    <button
      className={buttonClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {loading && loadingPosition === "start" && <LoadingSpinner />}
      {children}
      {loading && loadingPosition === "end" && <LoadingSpinner />}
    </button>
  )
}

export default MyButton
