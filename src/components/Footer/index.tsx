import * as S from "./styles";
import Image from "next/image";
import MenuFooter from "../MenuFooter";
import Address from "../Address";
import ContactFooter from "../ContactFooter";
import Attendance from "../Attendance";

const Footer = () => {
  return (
    <S.Footer>
      <S.ContainerFooter>
        <S.LogoContaint>
          <Image src="/img/ledMidia.svg" width="100" height="60" />
        </S.LogoContaint>
        <S.Content>
          <MenuFooter />
          {/* <Address /> */}
          <ContactFooter />
          <Attendance />
        </S.Content>
      </S.ContainerFooter>
    </S.Footer>
  );
};

export default Footer;
