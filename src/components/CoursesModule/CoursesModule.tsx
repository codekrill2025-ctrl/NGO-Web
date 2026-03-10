import { Box, Container, Typography } from "@mui/material";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import "./CoursesModule.scss";

type Course = {
  id: string;         // 01..06
  title: string;      // label
  subtitle?: string;  // optional small text
  icon: React.ReactNode;
  side: "top" | "bottom"; // alternating
};

const courses: Course[] = [
  { id: "01", title: "Core Employability", icon: <CampaignOutlinedIcon />, side: "bottom" },
  { id: "02", title: "Healthcare", subtitle: "(General Duty Assistance)", icon: <MedicalServicesOutlinedIcon />, side: "top" },
  { id: "03", title: "Banking, Financial Services, and Insurance", subtitle: "(BFSI)", icon: <AccountBalanceOutlinedIcon />, side: "bottom" },
  { id: "04", title: "Retail Management", icon: <StorefrontOutlinedIcon />, side: "top" },
  { id: "05", title: "Business Process Outsourcing", subtitle: "(BPO)", icon: <GroupsOutlinedIcon />, side: "bottom" },
  { id: "06", title: "Digital Marketing", icon: <FavoriteBorderOutlinedIcon />, side: "top" },
];

export default function CoursesModule() {
  return (
    <Box className="coursesModule">
      <Container maxWidth="lg">
        <Typography className="title">COURSES MODULE</Typography>

        <Box className="timelineWrap">
          {/* SVG ribbon connector behind circles */}
          <svg
            className="ribbon"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* thick yellow ribbon */}
            <path
              d="M80,110 
                 C160,20 240,200 320,110 
                 C400,20 480,200 560,110 
                 C640,20 720,200 800,110 
                 C880,20 960,200 1040,110 
                 C1080,90 1120,70 1160,110"
              fill="none"
              className="ribbonStroke"
            />
          </svg>

          {/* nodes */}
          <Box className="nodes">
            {courses.map((c, idx) => (
              <Box key={c.id} className={`node node-${idx + 1}`}>
                {/* label */}
                <Box className={`label ${c.side}`}>
                  <Typography className="num">{c.id}</Typography>
                  <Typography className="lblTitle">{c.title}</Typography>
                  {c.subtitle ? (
                    <Typography className="lblSub">{c.subtitle}</Typography>
                  ) : null}
                  {/* dotted vertical line */}
                  <span className="dots" />
                </Box>

                {/* circle */}
                <Box className="circle">
                  <Box className="inner">
                    <Box className="icon">{c.icon}</Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}