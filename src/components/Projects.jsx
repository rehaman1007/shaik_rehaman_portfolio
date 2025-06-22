import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Stack,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const detailsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const projects = [
  {
    name: 'Audit Reporting System',
    desc: 'React.js + Express.js + CRUD + Auth',
    details:
      'Developed a full-featured audit reporting system with secure authentication, CRUD operations, and responsive dashboards to monitor and generate audit data efficiently.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    name: 'Balance Sheet',
    desc: 'AngularJS + Java + Reports',
    details:
      'Created a robust balance sheet application with dynamic report generation based on data from multiple sources to aid financial teams.',
    tech: ['AngularJS', 'Java', 'Spring Boot', 'MySQL'],
  },
  {
    name: 'Reporting Dashboard',
    desc: 'jQuery + Java + Data Viz',
    details:
      'Built real-time dashboards with interactive data visualizations and live data sync using WebSockets for better business insights.',
    tech: ['jQuery', 'Java', 'D3.js', 'WebSockets'],
  },
  {
    name: 'TCRS (Digital signer)',
    desc: 'Electron + PDF Signer',
    details:
      'Implemented a cross-platform desktop application for secure PDF digital signing and certificate validation using Electron.',
    tech: ['Electron', 'Node.js', 'PDF-lib'],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="projects"
      sx={{
        py: 5,
        px: { xs: 2, sm: 4 },
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Projects
      </Typography>

      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="project-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            style={{
              display: 'grid',
              gap: '32px',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            }}
          >
            {projects.map((p) => (
              <motion.div key={p.name} variants={itemVariants}>
                <Paper
                  elevation={4}
                  onClick={() => setSelectedProject(p)}
                  sx={{
                    p: 3,
                    cursor: 'pointer',
                    borderRadius: 3,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1c1c1c, #121212)'
                        : 'linear-gradient(145deg, #f0f0f0, #d9d9d9)',
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '6px 6px 12px #141414, -6px -6px 12px #1f1f1f'
                        : '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '10px 10px 20px #0a0a0a, -10px -10px 20px #262626'
                          : '10px 10px 20px #c0c0c0, -10px -10px 20px #ffffff',
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {p.name}
                  </Typography>
                  <Typography>{p.desc}</Typography>
                </Paper>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="project-details"
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ paddingTop: '1rem' }}
          >
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => setSelectedProject(null)}
              sx={{ mb: 3 }}
            >
              Back to Projects
            </Button>

            <Typography variant="h5" gutterBottom>
              {selectedProject.name}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {selectedProject.desc}
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>
              What I Did
            </Typography>
            <Typography>{selectedProject.details}</Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>
              Technologies Used
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
              {selectedProject.tech.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" />
              ))}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
