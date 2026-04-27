import { Box, Container, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FemaleIcon from "@mui/icons-material/Female";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HubIcon from "@mui/icons-material/Hub";

import "./SDGGoals.scss";

const goals = [
  {
    icon: <FavoriteIcon />,
    title: "GOOD HEALTH & WELL BEING",
    number: "#3",
    color: "purple",
  },
  {
    icon: <FemaleIcon />,
    title: "GENDER EQUALITY",
    number: "#5",
    color: "pink",
  },
  {
    icon: <SchoolIcon />,
    title: "QUALITY EDUCATION",
    number: "#4",
    color: "yellow",
  },
  {
    icon: <TrendingUpIcon />,
    title: "DECENT WORK & ECONOMIC GROWTH",
    number: "#8",
    color: "green",
  },
  {
    icon: <RemoveCircleOutlineIcon />,
    title: "REDUCED INEQUALITIES",
    number: "#10",
    color: "blue",
  },
  {
    icon: <HubIcon />,
    title: "PARTNERSHIPS FOR THE GOALS",
    number: "#17",
    color: "lightgreen",
  },
];

export default function SDGGoals() {
  return (
    <Box className="sdgSection">
      <Container maxWidth="xl">

        <Typography className="sdgTopTitle">
          TOWARDS ACHIEVING
        </Typography>

        <Typography className="sdgMainTitle">
          SUSTAINABLE DEVELOPMENT GOALS
        </Typography>

        <Box className="sdgGrid">
          {goals.map((goal, index) => (
            <Box key={index} className={`hexCard ${goal.color}`}>

              <Box className="hexContent">

                <Box className="icon">
                  {goal.icon}
                </Box>

                <Typography className="goalTitle">
                  {goal.title}
                </Typography>

                <Typography className="goalNumber">
                  {goal.number}
                </Typography>

              </Box>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}