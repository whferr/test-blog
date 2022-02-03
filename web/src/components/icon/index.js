import React from "react";
import HamburgerIcon from "./hamburger";
import DragonIcon from "./dragon";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    case "dragon":
      return <DragonIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
