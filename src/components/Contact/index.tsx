import ContactForm from "../ContactForm";
import * as S from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Contact = () => {
  const elementRef = useAnimateOnScroll();
  return (
    <S.Contact id="contact" ref={elementRef}>
      <S.ContainerContact>
        <S.ContentContact>
          <h2>Peça seu orçamento agora!</h2>
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
