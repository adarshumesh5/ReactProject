import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Button, Box } from "@mui/material";
import "./App.css";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" minHeight="10vh" p={4}>
        <header className="App-header" style={{ marginBottom: "20px" }}>
          <h1>My Resume</h1>
          <Button variant="contained" onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </header>
        <main>
          <Education />
          <WorkExperience />
          <Projects />
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
