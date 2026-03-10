import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.scss";

const footerLinks = {
  about: [
    "About Smile",
    "Impact",
    "Reach & Presence",
    "Smilestones",
    "Privacy Policy",
  ],
  work: [
    "Education",
    "Health",
    "Livelihood",
    "Women Empowerment",
    "Disaster Response",
  ],
  campaigns: [
    "Shiksha Na Ruke",
    "Health Cannot Wait",
    "She Can Fly",
    "Swabhiman",
    "Tayyari Kal Ki",
  ],
  involved: [
    "Individual Support",
    "Corporate Partnerships",
    "Volunteer",
    "School Partnerships",
    "Careers",
  ],
  resource: [
    "Annual Report",
    "Newsletter",
    "Stories of Change",
    "The Smile Blog",
    "Films",
  ],
};

export default function Footer() {
  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Columns */}
          <Grid item xs={12} md={2.4}>
            <FooterColumn title="ABOUT US" items={footerLinks.about} />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <FooterColumn title="OUR WORK" items={footerLinks.work} />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <FooterColumn title="CAMPAIGNS" items={footerLinks.campaigns} />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <FooterColumn title="GET INVOLVED" items={footerLinks.involved} />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <FooterColumn title="RESOURCE CENTRE" items={footerLinks.resource} />
          </Grid>
        </Grid>

        {/* Divider */}
        <Box className="divider" />

        {/* Bottom Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="address">
              <strong>Smile Foundation</strong>
              <br />
              161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre
              New Delhi - 110049 Delhi, India
              <br />
              Contact Us: Tel: +91-11-43123700 | E-mail:
              info@smilefoundationindia.org
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className="rightSection">
            {/* Social Icons */}
            <Box className="socialIcons">
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
              <IconButton><YouTubeIcon /></IconButton>
              <IconButton><InstagramIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
            </Box>

            {/* Newsletter */}
            <Box className="newsletter">
              <Typography variant="subtitle1" className="newsletterTitle">
                Subscribe to Our Newsletter
              </Typography>
              <Box className="newsletterForm">
                <TextField
                  variant="standard"
                  placeholder="Name"
                  fullWidth
                />
                <TextField
                  variant="standard"
                  placeholder="Enter Your Email"
                  fullWidth
                />
                <Button variant="contained" className="subscribeBtn">
                  SUBSCRIBE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Box className="footerColumn">
      <Typography className="columnTitle">{title}</Typography>
      {items.map((item, index) => (
        <Typography key={index} className="columnItem">
          {item}
        </Typography>
      ))}
    </Box>
  );
}