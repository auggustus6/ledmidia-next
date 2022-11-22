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
            No movimento das imagens, de cores e contrastes, animados e
            inéditos, se alicerçou a sedução alcançada pelos tablets e
            smartphone e agora chegou a hora de transcender, de alcançar o
            público com este mesmo apelo, através da veiculação em Painéis led
            de Alta Definição DOOH - Digital Out Of Home.
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
