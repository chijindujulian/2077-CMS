import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/image.png";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : null
    );
  };

  const handleContextMenuClose = () => {
    setContextMenu(null);
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                maxWidth: "150px",
                width: "100%",
                "& img": {
                  width: "100%",
                  height: "auto",
                  maxWidth: "100px",
                },
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onContextMenu={handleContextMenu} // Add right-click event
              />
            </Box>
          </Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <>
                <IconButton color="inherit" edge="end" onClick={handleMenuOpen}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{ sx: { width: "200px" } }}
                >
                  <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                    Home
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/about"
                    onClick={handleMenuClose}
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/values"
                    onClick={handleMenuClose}
                  >
                    Our Values
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/support"
                    onClick={handleMenuClose}
                  >
                    Support Us
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="https://discord.com/invite/2077collective"
                    target="_blank"
                    rel="noopener"
                    onClick={handleMenuClose}
                  >
                    JOIN OUR COMMUNITY
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/about"
                  sx={{ mx: 1 }}
                >
                  About
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/values"
                  sx={{ mx: 1 }}
                >
                  Our Values
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/support"
                  sx={{ mx: 1 }}
                >
                  Support Us
                </Button>
                <Button
                  color="inherit"
                  href="https://discord.com/invite/2077collective"
                  target="_blank"
                  rel="noopener"
                  sx={{ mx: 1 }}
                >
                  JOIN OUR COMMUNITY
                </Button>
              </Box>
            )}
            <ThemeToggle />
          </Box>
        </Container>
      </Toolbar>
      <Menu
        open={contextMenu !== null}
        onClose={handleContextMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem
          component="a"
          href="#"
          download="logo.svg"
          onClick={handleContextMenuClose}
        >
          Download Logo as SVG
        </MenuItem>
        <MenuItem
          component="a"
          href="#"
          download="favicon.ico"
          onClick={handleContextMenuClose}
        >
          Download Favicon
        </MenuItem>
        <MenuItem
          component="a"
          href="#"
          download="brand-assets.zip"
          onClick={handleContextMenuClose}
        >
          Download Brand Assets
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
