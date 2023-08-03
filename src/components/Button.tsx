import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onButtonClick: () => void;
}

const Button = ({ children, onButtonClick }: Props) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

export default Button;
