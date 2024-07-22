import React from "react";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/image.png";

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "100px",
                width: "auto",
                marginRight: "8px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              } // Scale up on hover
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // Scale back on mouse out
            />
          </Link>
          <div>
            <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ mx: 1 }}>
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
              Support US
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
            <ThemeToggle />
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
