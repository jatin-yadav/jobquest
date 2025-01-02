import { ReactElement } from "react"

interface ButtonProps {
  text: string
  variant?: "primary" | "secondary"
  onClick?: () => void
  startIcon?: ReactElement
  loading?: boolean
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex gap-2 items-center justify-center"

const Button = ({ variant = "primary", text, startIcon, onClick, loading }: ButtonProps) => {
  return (
    <button className={`${variantClasses[variant]} ${defaultStyles} ${loading ? "opacity-60" : ""}`} disabled={loading} onClick={onClick}>
      {startIcon && <span className="icon">{startIcon}</span>}
      {loading ? "Loading..." : text}
    </button>
  )
}

export default Button;