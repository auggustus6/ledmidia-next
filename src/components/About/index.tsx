import Image from "next/image";
import Card from "../Card";
import * as S from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const About = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <S.About id="about">
      <S.ContainerAbout>
        <S.ContentAbout ref={elementRef}>
          <h1>Sua marca vai impactar a cidade</h1>
          <p>
            Se você chegou até aqui, sabemos que quer levar a comunicação da sua
            empresa a outro patamar. Vamos montar um plano para impactar a
            cidade. São mais de 50 anos conectando marcas e pessoas.
          </p>
          <Image src="/img/about.svg" width="790" height="420" />
        </S.ContentAbout>
        <S.ContainerCard>
          <Card
            img="/img/icon1.svg"
            title="Título"
            p="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          />
          <Card
            img="/img/icon2.svg"
            title="Título"
            p="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          />
          <Card
            img="/img/icon3.svg"
            title="Título"
            p="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          />
        </S.ContainerCard>
      </S.ContainerAbout>
    </S.About>
  );
};

export default About;
