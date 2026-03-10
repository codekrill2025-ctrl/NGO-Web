import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#79b930" },     // green button
    secondary: { main: "#2e7d32" },
    text: { primary: "#1b1b1b" },
    background: { default: "#ffffff" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    button: {
      textTransform: "uppercase",
      fontWeight: 600,
      letterSpacing: "0.06em",
      fontSize: "0.84rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          background: "#fff",
          color: "#1b1b1b",
        },
      },
    },
  },
});