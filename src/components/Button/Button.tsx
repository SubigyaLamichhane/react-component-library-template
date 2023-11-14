import React from "react";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-black">{props.label}</button>;
};

export default Button;
