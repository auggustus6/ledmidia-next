import Image from "next/image";
import Card from "../Card";
import * as S from "./styles";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import { SwiperSlide, SwiperProps } from "swiper/react";
import Slider from "../Slider/Slider";

import { BsFillGeoFill as GeoIcon } from "react-icons/bs";
import { ImQrcode as QrCodeIcon } from "react-icons/im";
import { RxLightningBolt as ImpactIcon } from "react-icons/rx";

const About = () => {
  const elementRef = useAnimateOnScroll();
  const settings: SwiperProps = {
    spaceBetween: 10,
    loop: false,
    breakpoints: {
      1000: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 2,
      },
      350: {
        slidesPerView: 1,
      },
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <S.About id="about">
      <S.ContainerAbout>
        <S.ContentAbout ref={elementRef}>
          <h1>Sua marca vai impactar a cidade</h1>
          <p>
            Nascemos da evolução de conceitos experimentados, com objetivo de
            promover o novo, o futuro, com desenvolvimento e sustentabilidade.
          </p>
          <p>
            No movimento das imagens, de cores e contrastes, animados e
            inéditos, se alicerçou a sedução alcançada pelos tablets e
            smartphone e agora chegou a hora de transcender, de alcançar o
            público com este mesmo apelo, através da veiculação em Painéis led
            de Alta Definição DOOH - Digital Out Of Home.
          </p>
          <p>
            A imagem de grande formato de papel, tinta e solventes dos outdoors,
            inerte e passiva, que se integra a paisagem e deixa de ser notada
            após o segundo olhar, deram lugar ao movimento, a ação, levando a
            marca aos clientes com maior força, potência e qualidade.
          </p>

          <Image src="/img/banner_led.png" width="790" height="420" />
        </S.ContentAbout>
        <S.ContainerCard>
          <Slider settings={settings}>
            <SwiperSlide>
              <Card img="/img/icon1.svg" title="Localização" icon={GeoIcon}>
                Painéis de LED espalhados pelos principais pontos de Rio Preto
                com o objetivo de gerar visibilidade para o seu negócio!
                <br />
                Destaque para a sua marca por toda cidade.
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                img="/img/icon2.svg"
                title="Interatividade"
                icon={QrCodeIcon}
              >
                Com a LED MÍDIA você pode atingir e causar mais impacto no
                público!
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card img="/img/icon3.svg" title="Impacto" icon={ImpactIcon}>
                Impacto e visibilidade juntos, tudo pensado para evolução do seu
                negócio!
              </Card>
            </SwiperSlide>
          </Slider>
        </S.ContainerCard>
      </S.ContainerAbout>
    </S.About>
  );
};

export default About;
