import * as S from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

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
          <S.ContainerPanelsCard>
            <S.PainelOne>
              <h1>Anubis</h1>
              <p>Av. Alberto Andalo sentido centro</p>
            </S.PainelOne>
            <S.PainelTwo>
              <h1>Rene</h1>
              <p>Av. Bady Bassitt sentido centro</p>
            </S.PainelTwo>
            <S.PainelThree>
              <h1>Murchid Homsi</h1>
              <p>Av. Murchid Homsi, sentido Hosp Austa/Rod.WLuiz</p>
            </S.PainelThree>
            <S.PainelFour>
              <h1>Philadelpho</h1>
              <p>
                Av Philadelpho Gouveia Netto, esquina Mc Donald Sentido Regiao
                Norte
              </p>
            </S.PainelFour>
          </S.ContainerPanelsCard>
        </S.ContentPanels>
      </S.ContainerPanels>
    </S.Panels>
  );
};

export default Panels;
