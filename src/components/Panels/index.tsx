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
            Nossos painéis estão posicionados estratégicamente em 3 das
            principais vias de maior fluxo de veículos da cidade, cujas
            localizações exclusivas atingem um volume enorme de clientes e
            potenciais clientes, solidificando a marca para seus consumidores e
            aumentando significamente a possibilidade de expansão, com a
            conquista e prospecção de novas pessoas do público-alvo.
          </p>
          <PanelsCard />
        </S.ContentPanels>
      </S.ContainerPanels>
    </S.Panels>
  );
};

export default Panels;
