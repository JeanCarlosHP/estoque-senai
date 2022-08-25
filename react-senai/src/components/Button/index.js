import React from "react";

import { ContainerButton } from "./styles";

const Button = ({ title, onClick, style }) => {
  return (
    <ContainerButton style={style} onClick={onClick}>{title}</ContainerButton>
  );
}

export default Button;
