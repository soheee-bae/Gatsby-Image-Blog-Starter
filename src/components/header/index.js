import React from "react";
import { HeaderContent } from "../headerContent";
import "./index.scss";

export const Header = ({ headerImg, ...rest }) => {
  const src = require(`../../../assets/images/${headerImg}`);

  return (
    <div className="header">
      <img src={src.default} alt={headerImg} />
      <HeaderContent {...rest} />
    </div>
  );
};
