import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: ()=>void;
  className?: string;
}

const variantClass = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyle = "px-4 py-2 rounded-md font-light flex justify-center items-center";

export function Button({ variant, text, startIcon, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${variantClass[variant]} ${defaultStyle} ${className ?? ""}`}>
      {startIcon && <span className="pr-2">{startIcon}</span>}
      {text}
    </button>
  );
}
