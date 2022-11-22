import * as S from "./styles";

const ContactFooter = () => {
  return (
    <S.FooterContact>
      <h3>Contato</h3>
      <p>+55 17 99262-3038</p>
      <p style={{ marginBottom: -5 }}>Instagram:</p>
      <p>
        <a
          style={{ color: "#00a6de" }}
          href="https://instagram.com/ledmidiarp"
          target="_blank"
          rel="noreferrer"
        >
          @ledmidiarp
        </a>
      </p>
      <p style={{ marginBottom: -5 }}>Email:</p>
      <p>
        <a style={{ color: "#00a6de" }} href="mailto:contato@ledmidiarp.com.br">
          contato@ledmidiarp.com.br
        </a>
      </p>
    </S.FooterContact>
  );
};

export default ContactFooter;
