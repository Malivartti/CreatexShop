import React from "react";
import "./index.sass";

interface ButtonProps {
  variant: "outline" | "filled";
  padding: number;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  padding,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={`btn-reset btn btn-${variant}`}
      onClick={onClick}
      style={{ padding: `0 ${padding}px` }}
    >
      {children}
    </button>
  );
};

export default Button;
