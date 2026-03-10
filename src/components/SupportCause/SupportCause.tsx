import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./SupportCause.scss";

import image1 from "../../assets/cause1.webp";
import image2 from "../../assets/cause2.webp";
import image3 from "../../assets/cause3.jpg";
import image4 from "../../assets/cause4.webp";

const causes = [
  {
    title: "TAYYARI\nKAL KI",
    image: image1,
    desc: "Our campaign ‘Tayyari Kal Ki’ aims at Training & Up Skilling the youth between the age of 18-32 years for employment and empowering them with a secure livelihood."
  },
  {
    title: "HEALTH\nCANNOT WAIT",
    image: image2,
    desc: "Realising the need for accessible and quality healthcare for all, our campaign ‘Health Cannot Wait’ aims at providing people from the under-privileged sections."
  },
  {
    title: "SHIKSHA\nNA RUKE",
    image: image3,
    desc: "Smile Foundation, through its Shiksha Na Ruke initiative, has been helping children from difficult circumstances get back to school and restart their lives."
  },
  {
    title: "SHE CAN\nFLY",
    image: image4,
    desc: "Smile Foundation’s initiative ‘She Can Fly’ is an effort to enable equip and empower girl children with quality education, proper nutrition, good health."
  }
];

export default function SupportCauseSlider() {
  return (
    <Box className="supportSection">
      <Container maxWidth="lg">

        <Typography className="supportTitle">
          SUPPORT A CAUSE
        </Typography>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
        >
          {causes.map((item, index) => (
            <SwiperSlide key={index}>

              <Box className="causeCard">

                <Box className="causeImage">
                  <img src={item.image} />

                  <Typography className="imageTitle">
                    {item.title}
                  </Typography>
                </Box>

                <Typography className="causeDesc">
                  {item.desc}
                </Typography>

                <Typography className="causeLink">
                  know more &gt;
                </Typography>

              </Box>

            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </Box>
  );
}