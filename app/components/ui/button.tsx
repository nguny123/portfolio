import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className = '', variant = 'solid', ...props }: ButtonProps) {
  const base = "font-semibold rounded-xl transition-all";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
