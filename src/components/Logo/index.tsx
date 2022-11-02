import React from "react";
import * as Styles from "../Logo/styles";
import Image from "next/image";

const Logo = () => {
  return (
    <Styles.Logo>
      <Image src="/img/ledMidia.svg" width="100" height="60" />
    </Styles.Logo>
  );
};

export default Logo;
