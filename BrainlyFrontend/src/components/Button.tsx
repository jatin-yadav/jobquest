import { ReactElement } from "react"

interface ButtonProps {
  variant?: "primary" | "secondary"
  text: string
  onClick: () => void
  startIcon?: ReactElement
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex gap-2 items-center justify-center"

const Button = ({ variant = "primary", text, startIcon, onClick }: ButtonProps) => {
  return (
    <button className={`${variantClasses[variant]} ${defaultStyles}`} onClick={onClick}>
      {startIcon && <span className="icon">{startIcon}</span>}
      {text}
    </button>
  )
}

export default Button;