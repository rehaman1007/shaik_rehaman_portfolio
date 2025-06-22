import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Updated skills data with SVG paths and color
const skillsData = [
  { name: "JavaScript", desc: "ES6+, modern JS", icon: "/javascript.svg", color: "#F7DF1E" },
  { name: "React.js", desc: "Hooks, context API", icon: "/react.svg", color: "#61DAFB" },
  { name: "Angular", desc: "Component-driven UI", icon: "/angularjs.svg", color: "#DD0031" },
  { name: "Java", desc: "OOP, Spring Boot", icon: "/java.svg", color: "#f89820" },
  { name: "Node.js", desc: "Express, REST APIs", icon: "/nodejs.svg", color: "#68A063" },
  { name: "Spring Boot", desc: "Microservices & APIs", icon: "/spring.svg", color: "#6DB33F" },
  { name: "SQL", desc: "Queries & Design", icon: "/mysql.svg", color: "#4479A1" },
  { name: "Oracle SQL", desc: "Stored Procedures", icon: "/oracle.svg", color: "#F80000" },
];

// Circular progress ring SVG component
function CircularRing({ size = 100, strokeWidth = 8, color }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        stroke="#ddd"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
      />
    </svg>
  );
}

export default function Skills() {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        scrollMarginTop: { xs: 70, sm: 80 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Skills
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {skillsData.map(({ name, desc, icon, color }) => (
          <Box
            key={name}
            sx={{
              width: 140,
              userSelect: "none",
              cursor: "default",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Circular ring with centered icon */}
            <Box
              sx={{
                position: "relative",
                width: 100,
                height: 100,
                margin: "0 auto",
              }}
            >
              <CircularRing size={100} strokeWidth={6} color={color} />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={icon}
                  alt={name}
                  style={{
                    width: 48,
                    height: 48,
                    filter: `drop-shadow(0 0 2px ${color})`,
                  }}
                />
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
