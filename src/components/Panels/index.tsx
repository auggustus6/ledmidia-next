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
            Nossos painéis estão posicionados estrategicamente nas principais
            vias de maior fluxo de veículos da cidade, localizações exclusivas
            que atingem um volume enorme de potenciais clientes,
            solidificando a marca para seus consumidores.
          </p>
          <PanelsCard />
        </S.ContentPanels>
      </S.ContainerPanels>
    </S.Panels>
  );
};

export default Panels;
