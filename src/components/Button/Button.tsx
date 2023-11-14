import React from "react";
import "../../global.css";

interface ButtonProps {
  label: string;
  // size is optional and defaults to "medium"
  size?: "small" | "medium" | "large" | undefined;
}

const Button = (props: ButtonProps) => {
  const size = props.size || "medium";

  return (
    <button
      className={`bg-accents-9
    ${size === "small" ? "text-sm py-1 px-2" : ""}
    ${size === "medium" ? "text-base py-2 px-4" : ""}
    ${size === "large" ? "text-lg py-3 px-6" : ""}
  `}
    >
      {props.label}
    </button>
  );
};

export default Button;
