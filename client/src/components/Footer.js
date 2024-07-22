import React from "react";
import { Container, Typography, Link as MuiLink } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="body1">
          &copy; 2024 - 2077 Collective. All rights reserved.
        </Typography>
        <MuiLink
          href="https://discord.com/invite/2077collective"
          target="_blank"
          rel="noopener"
          variant="body1"
          sx={{ display: "block", mt: 2 }}
        >
          Join our Discord Server
        </MuiLink>
      </Container>
    </footer>
  );
};

export default Footer;
