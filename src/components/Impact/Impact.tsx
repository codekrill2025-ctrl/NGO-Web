import { Box, Container, Grid, Typography } from "@mui/material";
import "./Impact.scss";

type ImpactItem = {
  value: string;     // 20+ / 2000+ / ...
  label: string;     // LAC / VILLAGES / ...
  lines: string[];   // description lines
};

const impactData: ImpactItem[] = [
  {
    value: "20+",
    label: "LAC",
    lines: ["children and", "their families are", "impacted every year"],
  },
  {
    value: "2000+",
    label: "VILLAGES",
    lines: ["and slums", "are reached out", "to across the country"],
  },
  {
    value: "400+",
    label: "PROJECTS",
    lines: ["focused on", "education, healthcare,", "and women empowerment"],
  },
  {
    value: "27+",
    label: "STATES",
    lines: ["are reached", "including the", "remotest areas"],
  },
];

export default function Impact() {
  return (
    <Box className="impactSection">
      <Container maxWidth="md">
        <Typography className="impactTitle">OUR IMPACT</Typography>

        <Grid container spacing={4} className="impactGrid">
          {impactData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <Box className="impactCard">
                <Typography className="impactValue">{item.value}</Typography>
                <Typography className="impactLabel">{item.label}</Typography>

                <Box className="impactDesc">
                  {item.lines.map((t, i) => (
                    <Typography key={i} className="impactText">
                      {t}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}