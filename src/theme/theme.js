import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      ...(mode === "light"
        ? {
            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },
            text: {
              primary: "#0f172a",
              secondary: "#64748b",
            },
          }
        : {
            background: {
              default: "#0f172a",
              paper: "#111827",
            },
            text: {
              primary: "#f9fafb",
              secondary: "#9ca3af",
            },
          }),
    },

    shape: {
      borderRadius: 12,
    },
  });