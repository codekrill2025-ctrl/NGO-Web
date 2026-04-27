import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./GetInTouch.scss";

const partnershipItems = [
  {
    title: "NORTH REGION",
    name: "Vikram Singh Walia - +918130145658",
    email: "cp.del@smilefoundationindia.org",
  },
  {
    title: "WEST REGION",
    name: "John ThattiI - +919820363999",
    email: "cp.mum@smilefoundationindia.org",
  },
  {
    title: "SOUTH REGION",
    name: "Archana Kore - +919880602956",
    email: "cp.blr@smilefoundationindia.org",
  },
  {
    title: "EAST REGION",
    name: "Joieta Rajput - +91 98997 10672",
    email: "joieta@smilefoundation.email",
  },
  {
    title: "CORPORATE EMPLOYEE ENGAGEMENT",
    name: "Salony Pandya - +919999180854",
    email: "engagement@smilefoundationindia.org",
  },
  {
    title: "CAUSE MARKETING & CAMPAIGNS",
    name: "Roopam Dhir - +918178468746",
    email: "crm@smilefoundationindia.org",
  },
];

const offices = {
  Mumbai: {
    address:
      "101, First Floor Gladiola Above Kotak Bank, Hanuman Road, Ville Parle East, Mumbai - 400 057",
    phone: "91-22-26104106/07",
    email: "mumbai@smilefoundationindia.org",
  },
  Kolkata: {
    address: "75C Park Street, Kolkata - 700016",
    phone: "91-33-40000000",
    email: "kolkata@smilefoundationindia.org",
  },
  Bengaluru: {
    address: "Koramangala, Bengaluru - 560034",
    phone: "91-80-40000000",
    email: "bengaluru@smilefoundationindia.org",
  },
};

export default function Contact() {
  const [office, setOffice] = useState<keyof typeof offices>("Mumbai");

  return (
    <>
      <Header/>

      <main className="contactPage">
        {/* Breadcrumb */}
        <Container maxWidth="lg">
          <Box className="breadcrumbBox">
            <Typography className="pageTitle">CONTACT US</Typography>

            <Box className="breadcrumb">
              <HomeIcon fontSize="small" />
              <span>HOME</span>
              <strong>›</strong>
              <span>PAGES</span>
              <strong>›</strong>
              <span className="green">CONTACT US</span>
            </Box>
          </Box>
        </Container>

        {/* Contact + Form */}
        <Container maxWidth="lg">
          <Box className="contactTop">
            <Box className="contactLeft">
              <Typography className="sectionHeading">
                FOR CORPORATE PARTNERSHIPS
              </Typography>
              <Typography className="normalText">
                Parul Sharma - +919266740073
              </Typography>
              <Typography className="lightText">
                cp@smilefoundationindia.org
              </Typography>

              <Typography className="sectionHeading mt">
                DONATION RELATED QUERIES
              </Typography>

              <Typography className="smallHeading">FOR NEW DONORS</Typography>
              <Typography className="normalText">
                Aakanksha Wahi - +717042128777
              </Typography>
              <Typography className="lightText">
                donation@smilefoundationindia.org
              </Typography>

              <Typography className="smallHeading">FOR EXISTING DONORS</Typography>
              <Typography className="normalText">
                Parul Kapoor - +918882517003
              </Typography>
              <Typography className="lightText">
                donorcare@smilefoundationindia.org
              </Typography>

              <Typography className="smallHeading">
                FOR ALL GENERAL QUERIES
              </Typography>
              <Typography className="lightText">
                info@smilefoundationindia.org
              </Typography>
            </Box>

            <Box className="contactRight">
              <Typography className="sectionHeading">HELPDESK</Typography>
              <Typography className="normalText mb">
                For any grievance, suggestions and queries kindly write to us.
              </Typography>

              <Box className="form">
                <label>Name <span>*</span></label>
                <TextField placeholder="Name" fullWidth />

                <Box className="formRow">
                  <Box className="formCol">
                    <label>Phone <span>*</span></label>
                    <TextField fullWidth />
                  </Box>
                  <Box className="formCol">
                    <label>Email <span>*</span></label>
                    <TextField placeholder="Email" fullWidth />
                  </Box>
                </Box>

                <label>Message <span>*</span></label>
                <TextField
                  placeholder="Message"
                  fullWidth
                  multiline
                  minRows={5}
                />

                <Box className="captchaBox">
                  <span className="checkBox" />
                  <span>I'm not a robot</span>
                  <span className="captchaText">reCAPTCHA</span>
                </Box>

                <Button className="submitBtn">SUBMIT</Button>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Accordions */}
        <Box className="greySection">
          <Container maxWidth="lg">
            <Box className="accordionWrap">
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className="accTitle">PARTNERSHIP SUPPORT</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography className="accSubTitle">
                    CORPORATE SOCIAL RESPONSIBILITY (CSR) RELATED QUERIES
                  </Typography>

                  <Box className="partnerGrid">
                    {partnershipItems.map((item) => (
                      <Box className="partnerCard" key={item.title}>
                        <Typography className="partnerTitle">
                          {item.title}
                        </Typography>
                        <Typography className="partnerText">
                          {item.name}
                        </Typography>
                        <Typography className="partnerEmail">
                          {item.email}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography className="accSubTitle other">
                    OTHER PARTNERSHIPS
                  </Typography>

                  <Box className="partnerGrid">
                    <Box className="partnerCard">
                      <Typography className="partnerTitle">
                        EVENT RELATED QUERIES
                      </Typography>
                      <Typography className="partnerText">
                        Rajeev Sharma - +919818282854
                      </Typography>
                      <Typography className="partnerEmail">
                        events@smilefoundationindia.org
                      </Typography>
                    </Box>

                    <Box className="partnerCard">
                      <Typography className="partnerTitle">
                        PHILANTHROPY ADVISORY
                      </Typography>
                      <Typography className="partnerText">
                        Ekta Anand - +91 9818753332
                      </Typography>
                      <Typography className="partnerEmail">
                        ekta.anand@smilefoundation.email
                      </Typography>
                    </Box>

                    <Box className="partnerCard">
                      <Typography className="partnerTitle">
                        SCHOOL PARTNERSHIP
                      </Typography>
                      <Typography className="partnerText">Meena Batra</Typography>
                      <Typography className="partnerEmail">
                        meena@smilefoundation.email
                      </Typography>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>

              {[
                "COMMUNICATION RELATED ASSOCIATIONS",
                "PROGRAMME RELATED QUERIES",
                "VOLUNTEERING & JOBS",
              ].map((title) => (
                <Accordion key={title}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="accTitle">{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="partnerEmail">
                      Details will be updated soon.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Visit Section */}
        <Container maxWidth="lg">
          <Box className="visitSection">
            <Typography className="visitTitle">VISIT US HERE</Typography>

            <Typography className="smallHeading">HEAD OFFICE</Typography>
            <Typography className="normalText">
              161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre,
              New Delhi - 110049
            </Typography>
            <Typography className="normalText">
              <strong>Phone:</strong> +91-11-43123700, +91-11-41354564/65/66 |
              <strong> Fax:</strong> +91-11-41354454
            </Typography>
            <Typography className="normalText">
              <strong>Email:</strong> info@smilefoundationindia.org
            </Typography>

            <Typography className="smallHeading mt">
              Regd. Office:
            </Typography>
            <Typography className="normalText">
              V-11, Level 1, Green Park Extension, New Delhi - 110016
            </Typography>

            <Typography className="visitTitle regional">
              REGIONAL OFFICES
            </Typography>

            <Box className="officeTabs">
              {Object.keys(offices).map((city) => (
                <Button
                  key={city}
                  className={office === city ? "activeOffice" : ""}
                  onClick={() => setOffice(city as keyof typeof offices)}
                >
                  {city}
                </Button>
              ))}
            </Box>

            <Box className="officeBox">
              <Box className="infoCards">
                <InfoCard
                  icon={<LocationOnIcon />}
                  title="ADDRESS"
                  text={offices[office].address}
                />
                <InfoCard
                  icon={<PhoneIcon />}
                  title="PHONE"
                  text={offices[office].phone}
                />
                <InfoCard
                  icon={<EmailIcon />}
                  title="EMAIL"
                  text={offices[office].email}
                />
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Map */}
        <Box className="mapSection">
          <iframe
            title="Smile Foundation Map"
            src="https://www.google.com/maps?q=Smile%20Foundation%20NGO%20in%20Delhi&output=embed"
            loading="lazy"
          />
        </Box>
      </main>

      <Footer />
    </>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Box className="infoCard">
      <Box className="infoIcon">{icon}</Box>
      <Typography className="infoTitle">{title}</Typography>
      <Typography className="infoText">{text}</Typography>
    </Box>
  );
}