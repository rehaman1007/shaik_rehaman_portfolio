import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Avatar, Button, useTheme } from "@mui/material";
import * as THREE from "three";
import { themeVantaMap } from "../theme";
import profile from "../assets/profile.jpeg";
import resumePDF from '../assets/resume.pdf';


export default function Hero({ themeName }) {
  console.log("themename", themeName);
  const theme = useTheme();
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaRef.current) return;

    if (vantaEffect) {
      vantaEffect.destroy();
    }

    const SelectedEffect = themeVantaMap[themeName] || NET;

    const newEffect = SelectedEffect({
      el: vantaRef.current,
      THREE,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      birdSize: 1.5,
      wingSpan: 20,
      speedLimit: 4.0,
      separation: 30.0,
      alignment: 30.0,
      cohesion: 20.0,
      quantity: 3.0,
    });

    setVantaEffect(newEffect);

    return () => {
      if (newEffect) newEffect.destroy();
    };
  }, [themeName, theme.palette.primary.main, theme.palette.background.default]);

  useEffect(() => {
    if (!vantaRef.current) return;

    if (vantaEffect) {
      vantaEffect.destroy();
    }

    const SelectedEffect = themeVantaMap[themeName] || themeVantaMap.dark;

    const newEffect = SelectedEffect({
      el: vantaRef.current,
      THREE,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    });

    setVantaEffect(newEffect);

    return () => {
      if (newEffect) newEffect.destroy();
    };
  }, [themeName, theme.palette.primary.main, theme.palette.background.default]);

  return (
    <Box
      id="home"
      ref={vantaRef}
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.primary,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          zIndex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Text Section */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 300 }}>
            Hello <span style={{ color: theme.palette.primary.main }}>.</span>
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 400 }}>
            I’m{" "}
            <span
              style={{
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              Shaik Rehaman
            </span>
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mt: 1, mb: 3 }}>
            Software Developer
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href="mailto:rehaman1007@gmail.com"
            >
              Got a project?
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              }}
              component="a"
              href={resumePDF}
              download="SHAIK_REHAMAN_RESUME.pdf"
            >
              My Resume
            </Button>
          </Box>
        </Box>

        {/* Profile Image */}
        <Box sx={{ position: "relative", width: 280, height: 280 }}>
          <Box
            sx={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${theme.palette.primary.main}33, transparent 70%)`,
              position: "absolute",
              top: 0,
              left: 0,
              transform: "scale(1.3)",
              zIndex: 0,
              filter: "blur(2px)",
            }}
          />
          <Avatar
            src={profile}
            alt="Profile"
            sx={{
              width: 280,
              height: 280,
              position: "relative",
              zIndex: 1,
              boxShadow: `0 0 30px ${theme.palette.primary.main}`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
