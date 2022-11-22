import * as S from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Home = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <S.Home id="home">
      <S.ContainerHome>
        <S.ContentHome ref={elementRef}>
          <h1>Anuncie nos melhores pontos</h1>
          <p>Posicione sua empresa nas melhores localizações</p>
          <a href="#contact">Quero Divulgar</a>
        </S.ContentHome>
      </S.ContainerHome>
    </S.Home>
  );
};

export default Home;
