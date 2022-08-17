import React from "react";

import {HeaderStyle} from "./styles"

const Header = ({ title }) => {
  return (
    <HeaderStyle>
      <h2>{title}</h2>
    </HeaderStyle>
  )
}

export default Header
