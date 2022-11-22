import * as S from "./styles";

const ContactFooter = () => {
  return (
    <S.FooterContact>
      <h3>Contato</h3>
      <p>+55 17 99262-3038</p>
      <p>Instagram:</p>
      <p>
        <a
          style={{ color: "#d316aa" }}
          href="https://instagram.com/ledmidiarp"
          target="_blank"
          rel="noreferrer"
        >
          @ledmidiarp
        </a>
      </p>
    </S.FooterContact>
  );
};

export default ContactFooter;
