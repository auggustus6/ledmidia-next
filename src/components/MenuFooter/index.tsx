import * as S from "./styles";

const MenuFooter = () => {
  return (
    <S.SiteMap>
      <h3>Site Map</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#advertisers">Clients</a>
        </li>
        <li>
          <a href="#painel">Nossos painéis</a>
        </li>
        <li>
          <a href="#contact">Quero Divulgar</a>
        </li>
      </ul>
    </S.SiteMap>
  );
};

export default MenuFooter;
