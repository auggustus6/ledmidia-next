import Image from "next/image";
import * as S from "./styles";

const Wpp = () => {
  return (
    <S.Wpp>
      <a
        href="https://api.whatsapp.com/send?phone=5517992623038&text=Olá%20Seja%20Bem%20Vindo"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/img/wpp.png" width={60} height={60} />
      </a>
    </S.Wpp>
  );
};

export default Wpp;
