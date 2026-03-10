import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/IMG1.webp";
import img2 from "../../assets/IMG2.png";

import "./HeroSlider.scss";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="heroSlider"
    >
      <SwiperSlide>
        <img src={img1} alt="slide1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} alt="slide2" />
      </SwiperSlide>
    </Swiper>
  );
}