import { Box, Container, Grid, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PublicIcon from "@mui/icons-material/Public";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import "./Programmes.scss";

const programmes = [
  {
    title: "EDUCATION",
    description:
      "Education, nutrition and holistic development of children",
    icon: <MenuBookIcon />,
    color: "#e0b45c",
  },
  {
    title: "HEALTHCARE",
    description:
      "Taking healthcare services to doorsteps of hard to reach communities",
    icon: <FavoriteBorderIcon />,
    color: "#b7a7c6",
  },
  {
    title: "WOMEN EMPOWERMENT",
    description:
      "Empowering adolescent girls & women through community engagement",
    icon: <Diversity3Icon />,
    color: "#9cc7c7",
  },
  {
    title: "LIVELIHOOD",
    description:
      "Skill training and placement support for underprivileged youth",
    icon: <WorkOutlineIcon />,
    color: "#c9a995",
  },
  {
    title: "EMPOWERING GRASSROOTS",
    description:
      "Helping community-based organizations become locally sustainable",
    icon: <PublicIcon />,
    color: "#62b67b",
  },
  {
    title: "DISASTER RESPONSE",
    description:
      "Reach out and respond to the needs of the disaster-affected people",
    icon: <WarningAmberIcon />,
    color: "#e98a7f",
  },
];

export default function Programmes() {
  return (
    <Box className="programmesSection">
      <Container maxWidth="lg">

        <Typography className="sectionTitle">
          OUR PROGRAMMES
        </Typography>

        <Grid container spacing={6}>
          {programmes.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box className="programmeItem">

                <Box
                  className="iconBox"
                  sx={{ background: item.color }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    className="programmeTitle"
                    sx={{ color: item.color }}
                  >
                    {item.title}
                  </Typography>

                  <Typography className="programmeDesc">
                    {item.description}
                  </Typography>
                </Box>

              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}