import ContactForm from "../ContactForm";
import * as S from "./styles";

const Contact = () => {
  return (
    <S.Contact id="contact">
      <S.ContainerContact>
        <S.ContentContact>
          <h2>Peça seu orgamento agora!</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </S.ContentContact>
        <S.ContentForm>
          <ContactForm />
        </S.ContentForm>
      </S.ContainerContact>
    </S.Contact>
  );
};

export default Contact;
