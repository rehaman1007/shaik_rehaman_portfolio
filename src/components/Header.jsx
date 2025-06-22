import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

export default function Header({ themeName, setThemeName }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sections = ["home", "about", "projects", "skills", "contact"];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: theme.palette.background.paper,
        height: "100%",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem sx={{ justifyContent: "flex-end" }} disablePadding>
          <IconButton onClick={handleDrawerToggle} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </ListItem>
        {sections.map((sec) => (
          <ListItem key={sec} disablePadding>
            <Link
              to={sec}
              smooth={true}
              duration={500}
              offset={-80}
              style={{
                width: "100%",
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              onClick={() => handleDrawerToggle()} // <-- Close drawer on click
            >
              <ListItemButton>
                <ListItemText primary={sec.toUpperCase()} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ background: "#0f111a" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SHAIK REHAMAN
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }} // better performance on mobile
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {sections.map((sec) => (
              <Link
                key={sec}
                to={sec}
                smooth={true}
                duration={500}
                offset={-80}
                style={{ textDecoration: "none" }}
              >
                <Button color="inherit">{sec.toUpperCase()}</Button>
              </Link>
            ))}

            <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: "white" }}>Theme</InputLabel>
              <Select
                label="Theme"
                value={themeName}
                onChange={(e) => setThemeName(e.target.value)}
                sx={{
                  color: "white",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                  ".MuiSvgIcon-root": { color: "white" },
                }}
              >
                {["light", "dark", "vibrant", "colorful", "cool"].map((t) => (
                  <MenuItem key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
