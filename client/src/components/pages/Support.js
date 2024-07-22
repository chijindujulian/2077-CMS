import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Link } from "@mui/material";

const SupportUs = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Support Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you're a fan of our work, join us in our mission to build and maintain Ethereum marketing!
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Link
                href="https://discord.com/invite/2077collective" // Replace with your actual Discord invite URL
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
              >
                Join our Discord server
              </Link>
            }
            secondary="Connect with us and other supporters. Share your ideas and collaborate."
            primaryTypographyProps={{ variant: 'h6' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Write some content about Ethereum"
            secondary="Contribute to our content repository and help educate others about Ethereum."
            primaryTypographyProps={{ variant: 'h6' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Do research into Ethereum protocols"
            secondary="Help us deepen our understanding and advance the Ethereum ecosystem."
            primaryTypographyProps={{ variant: 'h6' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Spread the word about 2077 Collective"
            secondary="Help us reach a broader audience by sharing our mission and work."
            primaryTypographyProps={{ variant: 'h6' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Send donations to 2077collective.eth"
            secondary="Support our mission financially. Every bit helps us continue our work."
            primaryTypographyProps={{ variant: 'h6' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Contact us for supporters list"
            secondary="If you want to be added to the supporters list on the main page, get in touch with us."
            primaryTypographyProps={{ variant: 'h6' }}
            secondaryTypographyProps={{ component: 'div' }}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default SupportUs;
