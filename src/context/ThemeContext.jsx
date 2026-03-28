import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../theme/theme";

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProviderCustom({ children }) {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("app-theme");
    return saved || "light";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}