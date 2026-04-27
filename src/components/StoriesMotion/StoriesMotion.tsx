import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./StoriesMotion.scss";

const videos = [
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
];

export default function StoriesMotion() {
  return (
    <Box className="storiesSection">
      <Container maxWidth="lg">

        <Typography className="storiesTitle">
          STORIES IN MOTION
        </Typography>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <Box className="videoCard">

                <video
                  controls
                  muted
                  loop
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </Box>
  );
}