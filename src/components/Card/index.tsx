import * as S from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

interface PropsCard {
  img: string;
  title: string;
  p: string;
}

const Card = ({ img, title, p }: PropsCard) => {
  const elementRef = useAnimateOnScroll();
  return (
    <S.Card>
      <S.CardContent ref={elementRef}>
        <Image src={img} width="64" height="64" />
        <h1>{title}</h1>
        <p>{p}</p>
      </S.CardContent>
    </S.Card>
  );
};

export default Card;
