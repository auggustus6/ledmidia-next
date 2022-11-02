import Image from "next/image";
import * as S from "./styles";

const About = () => {
  return (
    <S.About>
      <S.ContainerAbout>
        <S.ContentAbout>
          <h1>Sua marca vai impactar a cidade</h1>
          <p>
            Se você chegou até aqui, sabemos que quer levar a comunicação da sua
            empresa a outro patamar. Vamos montar um plano para impactar a
            cidade. São mais de 50 anos conectando marcas e pessoas.
          </p>
          <Image src="/img/about.svg" width="790" height="420" />
        </S.ContentAbout>
      </S.ContainerAbout>
    </S.About>
  );
};

export default About;
