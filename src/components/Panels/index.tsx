import * as S from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import PanelsCard from "../PanelsCard";

const Panels = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <S.Panels id="painel" ref={elementRef}>
      <S.ContainerPanels>
        <S.ContentPanels>
          <h1>Nossos painéis</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <PanelsCard />
        </S.ContentPanels>
      </S.ContainerPanels>
    </S.Panels>
  );
};

export default Panels;
