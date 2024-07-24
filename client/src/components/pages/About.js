import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>

      <Typography variant="h4" gutterBottom>
        What is the 2077 Collective?
      </Typography>
      <Typography variant="body1" paragraph>
        The 2077 Collective is a league of creatives, researchers, developers,
        and marketers committed to making Ethereum cool again. We're a funnel
        for individuals to come into an organized group, onboard,
        collaborate/coordinate with other individuals and work towards the goal
        of growing, educating, and promoting the Ethereum ecosystem. We believe
        Ethereum is technology for good and want to play a role in its adoption
        within and outside of crypto.
      </Typography>

      <Typography variant="h4" gutterBottom>
        What do we do?
      </Typography>
      <Typography variant="body1" paragraph>
        The 2077 Collective wants to create a better future for Ethereum. We
        bring together people passionate about growing the Ethereum ecosystem
        and give them the tools they need to succeed. We're a creative studio,
        research shop, and mad science lab rolled into one—a place where
        talented people can come together to build, research, write, and create
        in ways that add value to the Ethereum ecosystem.
      </Typography>

      <Typography variant="h4" gutterBottom>
        What are our values?
      </Typography>
      <Typography variant="body1" paragraph>
        Check out the{" "}
        <Link href="/values" color="primary">
          values page
        </Link>{" "}
        for a list of the values the 2077 Collective stands for.
      </Typography>

      <Typography variant="h4" gutterBottom>
        I'm sold. How do I get involved?
      </Typography>
      <Typography variant="body1" paragraph>
        Join our{" "}
        <Link href="https://discord.com/invite/2077collective" target="_blank" color="primary">
          Discord server
        </Link>{" "}
        and contribute!
      </Typography>
    </Container>
  );
};

export default About;
