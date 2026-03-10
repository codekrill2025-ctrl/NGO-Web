import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CoursesModule from "../components/CoursesModule/CoursesModule";
import Programmes from "../components/Programmes/Programmes";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Impact from "../components/Impact/Impact";
import SupportCause from "../components/SupportCause/SupportCause";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Image Slider */}
      <HeroSlider />

      {/* About Section */}
      <Box sx={{  py: 8 }}>
        <Container maxWidth="md">

          <Typography
            sx={{
            
              textAlign: "center",
              fontSize: "18px",
              lineHeight: "1.9",
              mb: 4,
              color: "#444"
            }}
          >
            Established in 2002, Smile Foundation is an Indian development
            organization, impacting the lives of over 20 lakh children and their
            families every year. We have more than 400 projects on education,
            healthcare, livelihood, and women empowerment in over 2,000 remote
            villages and urban slums across 27 states of India.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              lineHeight: "1.9",
              mb: 3,
              color: "#444"
            }}
          >
            Smile Foundation works as a catalyst in the cycle of change,
            complementing and supplementing government efforts to achieve the
            Sustainable Development Goals. We sensitize and partner with
            like-minded institutions and individuals to implement high-impact
            programmes that enable access, enhance quality and help bring long
            term behavioural change at the grassroots.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#7bb44d",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" }
            }}
            onClick={() => navigate("/about")}
          >
            read more &gt;
          </Typography>

        </Container>
      </Box>

     <Impact/>
      <Programmes />
      <SupportCause/>

      {/* <CoursesModule /> */}

      <Footer />
    </>
  );
}