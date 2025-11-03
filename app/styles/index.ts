import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.secondary },
    success: { main: Colors.success },
    info: { main: Colors.info },
    warning: { main: Colors.warning },
    error: { main: Colors.danger },
    background: {
      default: Colors.body_bg,
      paper: Colors.white,
    },
    text: {
      primary: Colors.shaft,
      secondary: Colors.dark,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "2.5rem" },
    h2: { fontWeight: 600, fontSize: "1.8rem" },
    h3: { fontWeight: 500, fontSize: "1.4rem" },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem", color: Colors.muted },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

export const overrides = {
  palette: theme.palette,
  components: theme.components,
};

export default theme;
