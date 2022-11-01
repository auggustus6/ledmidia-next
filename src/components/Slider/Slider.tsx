import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactNode } from "react";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slider;
