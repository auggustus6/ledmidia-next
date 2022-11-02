import { useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import IconMenu from "../IconMenu";
import * as S from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header>
      <S.ContainerHeader>
        <S.Content>
          <Logo />
          <Menu expanded={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <IconMenu onClick={() => setIsOpen(!isOpen)} expanded={isOpen} />
        </S.Content>
      </S.ContainerHeader>
    </S.Header>
  );
};

export default Header;
