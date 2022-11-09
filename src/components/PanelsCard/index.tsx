import * as S from "./styles";

const PanelsCard = () => {
  return (
    <S.ContainerPanelsCard>
      <S.Painel
        backgroundImg="/img/anubis.svg"
        hoverBackgroundImg="/img/anubisHover.svg"
      >
        <h1>Anubis</h1>
        <p>Av. Alberto Andalo sentido centro</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/rene.svg"
        hoverBackgroundImg="/img/reneHover.svg"
      >
        <h1>Rene</h1>
        <p>Av. Bady Bassitt sentido centro</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/murchid.svg"
        hoverBackgroundImg="/img/murchidHover.svg"
      >
        <h1>Murchid Homsi</h1>
        <p>Av. Murchid Homsi, sentido Hosp Austa/Rod.WLuiz</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/philadelpho.svg"
        hoverBackgroundImg="/img/philadelphoHover.svg"
      >
        <h1>Philadelpho</h1>
        <p>
          Av Philadelpho Gouveia Netto, esquina Mc Donald Sentido Regiao Norte
        </p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/redentora.png"
        hoverBackgroundImg="/img/redentorahover.png"
      >
        <h1>Title</h1>
        <p>Paragraph</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/norte.png"
        hoverBackgroundImg="/img/norteHover.png"
      >
        <h1>Title</h1>
        <p>Paragraph</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/nonato.png"
        hoverBackgroundImg="/img/nonatoHover.png"
      >
        <h1>Title</h1>
        <p>Paragraph</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/iguatemi.png"
        hoverBackgroundImg="/img/iguatemiHover.png"
      >
        <h1>Title</h1>
        <p>Paragraph</p>
      </S.Painel>
      <S.Painel
        backgroundImg="/img/guaruja.png"
        hoverBackgroundImg="/img/guarujaHover.png"
      >
        <h1>Title</h1>
        <p>Paragraph</p>
      </S.Painel>
    </S.ContainerPanelsCard>
  );
};

export default PanelsCard;
