import * as S from "./styles";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface PropsCard {
  children?: ReactNode;
  img: string;
  title: string;
  icon: IconType;
}

const Card = ({ img, title, children, icon: Icon }: PropsCard) => {
  const elementRef = useAnimateOnScroll();
  return (
    <S.Card>
      <S.CardContent ref={elementRef}>
        <div>
          <Icon />
        </div>
        {/* <Image src={img} width="64" height="64" /> */}
        <h1>{title}</h1>
        <p>{children}</p>
      </S.CardContent>
    </S.Card>
  );
};

export default Card;
