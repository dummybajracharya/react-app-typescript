import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onButtonClick: () => void;
  color?: 'primary' | 'secondary' | 'danger'
}

const Button = ({ children, onButtonClick, color='primary' }: Props) => {
  return <button className={'mx-2 btn btn-'+color} onClick={onButtonClick}>{children}</button>;
};

export default Button;
