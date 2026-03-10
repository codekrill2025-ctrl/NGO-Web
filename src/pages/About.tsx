import { Container, Typography, Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AboutPages() {
  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight={800} gutterBottom>
          About Smile Foundation
        </Typography>

        <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
          Established in 2002, Smile Foundation is an Indian development
          organization, impacting the lives of over 20 lakh children and their
          families every year. We have more than 400 projects on education,
          healthcare, livelihood, and women empowerment in over 2,000 remote
          villages and urban slums across 27 states of India.
        </Typography>

        <Typography sx={{ lineHeight: 1.8 }}>
          Smile Foundation works as a catalyst in the cycle of change,
          complementing and supplementing government efforts to achieve the
          Sustainable Development Goals. We sensitize and partner with
          like-minded institutions and individuals to implement high-impact
          programmes that enable access, enhance quality and help bring long
          term behavioural change at the grassroots.
        </Typography>
      </Container>

      <Footer />
    </>
  );
}