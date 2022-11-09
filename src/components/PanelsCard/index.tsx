import * as S from "./styles";
import painels from "../../utils/mocks";

const PanelsCard = () => {
  return (
    <S.ContainerPanelsCard>
      {painels.map((painel, index) => (
        <S.Painel
          key={index}
          backgroundImg={painel.backgroundImg}
          hoverBackgroundImg={painel.hoverBackgroundImg}
        >
          <S.ContentPainel>
            <h1>{painel.title}</h1>
            <p>{painel.p}</p>
          </S.ContentPainel>
        </S.Painel>
      ))}
    </S.ContainerPanelsCard>
  );
};

export default PanelsCard;
