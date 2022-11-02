import * as S from "./styles";
import { SwiperSlide, SwiperProps } from "swiper/react";
import Slider from "../Slider/Slider";
import Image from "next/image";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Advertisers = () => {
  const elementRef = useAnimateOnScroll();
  const settings: SwiperProps = {
    spaceBetween: 1,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      700: {
        slidesPerView: 4,
      },
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <S.Advertisers id="advertisers" ref={elementRef}>
      <S.ContainerAdvertisers>
        <S.ConTentAdvertisers>
          <h1>Nossos anunciantes</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </S.ConTentAdvertisers>
      </S.ContainerAdvertisers>
      <S.ContainerSlider>
        <Slider settings={settings}>
          <SwiperSlide>
            <Image src="/img/magalu.svg" width="150" height="35" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/carrefour.svg" width="150" height="35" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/casasbahia.svg" width="150" height="35" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/spotfy.svg" width="150" height="35" />
          </SwiperSlide>
        </Slider>
      </S.ContainerSlider>
    </S.Advertisers>
  );
};

export default Advertisers;
