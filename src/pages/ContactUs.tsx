import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";
import "./ContactUs.scss";

export default function ContactUs() {
  return (
    <Box className="contactUsPage">
      <Container maxWidth="lg">
        
        {/* Page Title */}
        <Typography className="pageTitle">
          Get in Touch
        </Typography>

        <Typography className="pageSubtitle">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </Typography>

        {/* Contact Sections */}
        <Grid container spacing={4} className="contactSections">
          
          {/* Corporate Partnerships */}
          <Grid item xs={12} md={4}>
            <Box className="contactCard">
              <Typography className="cardTitle">
                FOR CORPORATE PARTNERSHIPS
              </Typography>
              <Typography className="cardContent">
                <strong>Mr. Rajeev</strong><br />
                Email: <a href="mailto:rajeev@smilefoundationindia.org">rajeev@smilefoundationindia.org</a><br />
                Mobile: +91-9873342772
              </Typography>
            </Box>
          </Grid>

          {/* Donation Related Queries */}
          <Grid item xs={12} md={4}>
            <Box className="contactCard">
              <Typography className="cardTitle">
                DONATION RELATED QUERIES
              </Typography>
              <Typography className="cardContent">
                <strong>Ms. Priya / Ms. Smita</strong><br />
                Email: <a href="mailto:donorcare@smilefoundationindia.org">donorcare@smilefoundationindia.org</a><br />
                Mobile: +91-9873342772
              </Typography>
            </Box>
          </Grid>

          {/* Helpdesk */}
          <Grid item xs={12} md={4}>
            <Box className="contactCard">
              <Typography className="cardTitle">
                HELPDESK
              </Typography>
              <Typography className="cardContent">
                <strong>Ms. Jyoti</strong><br />
                Email: <a href="mailto:info@smilefoundationindia.org">info@smilefoundationindia.org</a><br />
                Mobile: +91-9873342772
              </Typography>
            </Box>
          </Grid>

        </Grid>

        {/* Contact Form */}
        <Box className="contactForm">
          <Typography className="formTitle">
            Send us a Message
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                className="formField"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                className="formField"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                className="formField"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                className="formField"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                className="formField"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" className="submitBtn">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Address Section */}
        <Box className="addressSection">
          <Typography className="addressTitle">
            Visit Our Office
          </Typography>
          <Typography className="addressContent">
            <strong>Smile Foundation</strong><br />
            161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre<br />
            New Delhi - 110049 Delhi, India<br />
            Tel: +91-11-43123700 | E-mail: info@smilefoundationindia.org
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
