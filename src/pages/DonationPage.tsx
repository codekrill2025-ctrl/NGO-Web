import { Container, Typography, Box, Button, Card, CardContent, Paper } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Donate } from "./Donate";

const educationStats = [
  { number: "32 million", label: "children out of school in India" },
  { number: "50%", label: "of adolescent girls do not complete secondary education" },
  { number: "1 in 4", label: "children leave school before completing primary education" },
  { number: "62%", label: "of children from economically weaker sections drop out by age 15" }
];

const stories = [
  {
    id: 1,
    title: "From Village to Classroom",
    description: "Meet Anita, a 12-year-old from Rajasthan who dreams of becoming a teacher. Your support helped her continue her education despite financial challenges.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Breaking Barriers",
    description: "Rahul's journey from child labor to classroom shows how education can transform lives. Today he's top of his class and inspiring others.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Empowering Girls",
    description: "Priya's story highlights the importance of girls' education. With your support, she's breaking stereotypes and pursuing her dreams.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export default function DonationPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: '500px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            SHIKSHA NA RUKE
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Join hands to support education of lesser privileged children
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              backgroundColor: '#4CAF50', 
              '&:hover': { backgroundColor: '#45a049' },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
            href="#donate-form"
          >
            DONATE NOW
          </Button>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
          Education in India: The Reality
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 2 }}>
          {educationStats.map((stat, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)' } }}>
              <Paper 
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  height: '100%',
                  border: '2px solid #e0e0e0',
                  '&:hover': { borderColor: '#4CAF50', transform: 'translateY(-5px)' },
                  transition: 'all 0.3s ease'
                }}
              >
                <Typography variant="h3" sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Stories in Motion Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            STORIES IN MOTION
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: '#666', maxWidth: '800px', mx: 'auto' }}>
            Real stories of real change. See how your contributions are transforming lives across India, one child at a time.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 2 }}>
            {stories.map((story) => (
              <Box key={story.id} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 32px)' } }}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-5px)' }, transition: 'all 0.3s ease' }}>
                  <Box 
                    sx={{ 
                      height: 200, 
                      backgroundColor: '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography sx={{ color: 'white' }}>Video Thumbnail</Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {story.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                      {story.description}
                    </Typography>
                    <Button variant="outlined" size="small">
                      Watch Story
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Donation Form Section */}
      <Box id="donate-form" sx={{ py: 8 }}>
        <Donate />
      </Box>

      <Footer />
    </>
  );
}
