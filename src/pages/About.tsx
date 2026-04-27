import { Container, Typography, Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./About.scss";
import childrenRunning from "../assets/children-running.png";
import PoorChild from "../assets/poorchild.jpg";


export default function AboutPages() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Box className="hero">
        <img src={childrenRunning} alt="hero" />
        <Box className="heroOverlay">
          <Typography className="heroTitle">
            REAL WORK. REAL CHANGE
          </Typography>
        </Box>
      </Box>

      {/* Tabs Section */}
      <Box className="aboutTabs">
        <Container maxWidth="lg">
          <Box className="tabsWrapper">

            <Box className="tab active">OUR STORY</Box>
            <Box className="tab">VISION</Box>
            <Box className="tab">MISSION</Box>
            <Box className="tab">PHILOSOPHY OF CHANGE</Box>
            <Box className="tab">THE LIFECYCLE APPROACH</Box>
            <Box className="tab">HOW WE WORK</Box>
            <Box className="tab">WHY TRUST US?</Box>

          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box className="aboutContent">
        <Container maxWidth="lg">

          <Box className="contentWrapper">

            {/* Left circle image */}
            <Box className="leftImage">
              <img src="/smile-icon.png" alt="smile" />
            </Box>

            {/* Text */}
            <Box className="textContent">
              <Typography className="para">
                Smile Foundation was initiated in 2002 when a group of friends came together with the intention of giving back to the society. They were inspired by the thought and philosophy of Peter Senge, the founder of the Society for Organizational Learning who has propagated that “sustainability, social equality and the environment are now business problems…” and corporate leaders can’t expect governments to solve them alone.
              </Typography>

              <Typography className="para">
                What triggered these thoughts was the liberalisation of the Indian economy in the 1990’s which brought with it immense opportunities. Business revived, and India became not just a market, but also an investment prospect for the developed world. Disposable incomes and early settlements became a living reality for the working middle-class. For the first time in India, professionals could think beyond making a living, and contribute towards the society.
              </Typography>
            </Box>

          </Box>

        </Container>
         </Box>
         <Box className="poor">
        <img src={PoorChild} alt="poor" />
        </Box>
        
         <Box className="text-Content">
         <Typography className="para2">
          Fuelled with enthusiasm, Smile’s founders gave a shape to their dream, and Smile Foundation was born. Over the last two decades, Smile has evolved as a sustainable Indian social institution – committed to do real work on the ground, and make the society and businesses inclusive in the process of bringing change.
         </Typography>
           <Typography className="para">
              On our way, we had to make many difficult choices and constantly innovate – whether it was choosing to work on the ground through a service-delivery approach, practicing management principles and adopting a business-like approach in the development sector, creating a unique resource modeling keeping businesses at the centre, or promoting the concept of civic driven change. Yes, we almost always took the road less travelled, and as they say, that has made all the difference!
           </Typography>
         </Box>
      
            {/* Tabs Section */}
      <Box className="aboutTabs">
        <Container maxWidth="lg">
          <Box className="tabsWrapper">

            <Box className="tab">OUR STORY</Box>
            <Box className="tab active">VISION</Box>
            <Box className="tab">MISSION</Box>
            <Box className="tab">PHILOSOPHY OF CHANGE</Box>
            <Box className="tab">THE LIFECYCLE APPROACH</Box>
            <Box className="tab">HOW WE WORK</Box>
            <Box className="tab">WHY TRUST US?</Box>

          </Box>
        </Container>
      </Box>
      <Footer />
    </>  
  );
}
