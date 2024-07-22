import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "./ThemeContext";

const ThemeToggle = React.memo(() => {
  const { toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    setIsDarkMode(currentTheme === "dark");
  }, []);

  return (
    <Tooltip title="Toggle light/dark theme">
      <IconButton
        onClick={() => {
          toggleTheme();
          setIsDarkMode(!isDarkMode);
        }}
        color="inherit"
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
});

export default ThemeToggle;
