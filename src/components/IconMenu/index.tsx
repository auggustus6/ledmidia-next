import React from "react";
import * as Styles from "./styles";

export type IconMenuProps = {
  onClick?: () => void;
  expanded?: boolean;
};

const IconMenu = ({ onClick, expanded }: IconMenuProps) => {
  return (
    <>
      <Styles.Icon className={expanded ? "active" : ""} onClick={onClick}>
        <span className="icon-1"></span>
        <span className="icon-2"></span>
        <span className="icon-3"></span>
      </Styles.Icon>
    </>
  );
};

export default IconMenu;
