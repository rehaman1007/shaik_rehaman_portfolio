import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CloudIcon from "@mui/icons-material/Cloud";

const services = [
  { icon: <CodeIcon fontSize="large" />, label: "Website Development" },
  { icon: <PhoneIphoneIcon fontSize="large" />, label: "App Development" },
  { icon: <CloudIcon fontSize="large" />, label: "Website Hosting" },
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "95%", label: "Client satisfaction" },
  { value: "120+", label: "Completed Projects" },
];

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      component="section"
      sx={{
        scrollMarginTop: { xs: 70, sm: 80 },
        py: 8,
        px: { xs: 2, sm: 4 },
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
        alignItems: "start",
      }}
    >
      {/* Left Timeline with Icons */}
      <Stack
        sx={{
          position: "relative",
          flex: 1,
          pl: 4,
        }}
        spacing={6}
      >
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            bottom: 8,
            left: 18,
            width: "2px",
            backgroundColor: "primary.main",
          }}
        />

        {/* Timeline Items */}
        {services.map((item, index) => (
          <Stack direction="row" spacing={2} alignItems="center" key={index}>
            <Box
              sx={{
                zIndex: 1,
                backgroundColor: "background.default",
                p: 0.5,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.main",
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="h6">{item.label}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* Right Text Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        sx={{ flex: 2 }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          About Me
        </Typography>

        <Typography paragraph>
          I'm a passionate problem solver with a background in design
          engineering, driven by a deep interest in technology and innovation.
          My journey into software development was fueled by a curiosity for how
          things work and a desire to create meaningful digital experiences.
        </Typography>

        <Typography paragraph>
          I find great satisfaction in building intuitive systems, refining user
          interactions, and bringing structure to ideas. I enjoy the process of
          turning concepts into functional, polished outcomes and thrive in
          roles that allow me to learn, adapt, and collaborate.
        </Typography>

        <Typography paragraph>
          My passion for development is not just about writing code — it’s about
          continuously growing, understanding user needs, and crafting solutions
          that make a difference.
        </Typography>

        <Typography paragraph>
          <strong>Bachelor of Technology</strong> – 2021
          <br />
          KL University, Andhra Pradesh
        </Typography>

        <Typography paragraph>
          <strong>Languages Known:</strong> English, Hindi, Telugu
        </Typography>

        {/* Stats Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          mt={4}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          {stats.map((stat, index) => (
            <Box key={index}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "primary.main" }}
              >
                {stat.value}
              </Typography>
              <Typography>{stat.label}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
