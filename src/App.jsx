import React, { useState, useEffect } from "react";
import { CssBaseline, Container, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { themes } from "./theme";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const [themeName, setThemeName] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  useEffect(() => {
    AOS.init({
      once: false, // animate every time element enters viewport
      duration: 800,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // call this if navigating programmatically
  }, [themeName]); // or when scroll happens

  const theme = themes[themeName] || themes.light;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themeName={themeName} setThemeName={setThemeName} />
      <Hero themeName={themeName}/>
      <Container maxWidth="lg">
        <About />
        <Projects />
        <Skills />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
