import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Stack,
  Divider,
  Button,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        py: 6,
        mt: 8,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Let’s Create Something Amazing
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Open to freelance projects, full-time roles, or just a good tech talk!
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          href="mailto:rehaman1007@gmail.com"
          sx={{ mb: 4 }}
        >
          Get In Touch
        </Button>

        {/* Social Links */}
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/shaik-rehaman-45008a222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/rehaman1007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href="https://twitter.com/@RehamanSk9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href="https://wa.me/918096858329"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon fontSize="medium" />
          </IconButton>
        </Stack>

        <Divider sx={{ maxWidth: 600, mx: 'auto', mb: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Built with <FavoriteIcon fontSize="small" sx={{ verticalAlign: 'middle', color: 'red' }} /> by Shaik Rehaman
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
