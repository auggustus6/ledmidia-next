import React from "react";
import * as Styles from "../Menu/styles";
import { IconMenuProps } from "../IconMenu/index";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Menu = ({ expanded, onClick }: IconMenuProps) => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.Nav className={expanded ? "active" : ""}>
      <Styles.List ref={elementRef}>
        <ul>
          <li>
            <a onClick={onClick} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={onClick} href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a onClick={onClick} href="#advertisers">
              Clientes
            </a>
          </li>
          <li>
            <a onClick={onClick} href="#painel">
              Nossos painéis
            </a>
          </li>
          <li>
            <a onClick={onClick} href="#contact">
              Quero Divulgar
            </a>
          </li>
        </ul>
      </Styles.List>
    </Styles.Nav>
  );
};

export default Menu;
