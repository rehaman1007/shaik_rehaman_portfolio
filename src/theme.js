// theme.js
import { createTheme } from '@mui/material/styles';
import NET from 'vanta/dist/vanta.net.min';
import HALO from 'vanta/dist/vanta.halo.min';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import GLOBE from 'vanta/dist/vanta.globe.min';
import RINGS from 'vanta/dist/vanta.rings.min';
import DOTS from 'vanta/dist/vanta.dots.min';

export const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' },
      background: { default: '#fafafa' },
      text: { primary: '#222222' },
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#90caf9' },
      background: { default: '#121212' },
      text: { primary: '#eeeeee' },
    },
  }),
  vibrant: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#e65100' },
      background: { default: '#fff3e0' },
      text: { primary: '#4e342e' },
    },
  }),
  colorful: createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#8e24aa' },
      background: { default: '#f3e5f5' },
      text: { primary: '#4a148c' },
    },
  }),
  cool: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#00bcd4' },
      background: { default: '#002f40' },
      text: { primary: '#b2ebf2' },
    },
  }),
};

// Map theme names to their respective Vanta effects
export const themeVantaMap = {
  light: CLOUDS,
  dark: RINGS,
  vibrant: NET,
  colorful: GLOBE,
  cool: HALO,
};
