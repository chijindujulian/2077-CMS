import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const OurValues = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Our Values
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Flexibility"
            secondary="We are not a traditional organization with bells and whistles. Crypto makes it possible for Internet strangers to coordinate with strangers on the Internet and pull off impressive feats. We provide maximum flexibility for contributors: the only requirement is to operate and deliver consistently."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Open global participation"
            secondary="Anyone in the world should be able to participate—irrespective of their background, affiliations, and philosophies—on maximally equal footing. Like Ethereum itself, participation in the Collective is permissionless and open to anyone with a desire to contribute positively to the Ethereum ecosystem."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Meritocracy > bureaucracy"
            secondary="We lean into anon culture and emphasize operating vs. performing, positive-sum games vs. zero-sum games, legitimacy by performance vs. legitimacy by continuity, vibrancy vs. sterility, and flexible structures vs. middle management and bureaucratic processes. The pie is big enough, and those who grow the pie must naturally have a (larger) share in it."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Sovereignty"
            secondary="Autonomy, self-leadership, and personal independence are necessary for innovation and creativity to thrive. We give room for the risk-takers, innovators, and operators to flourish and do their best work without stifling their freedom or raising the barrier to action."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Creativity and authenticity"
            secondary="We're dreamers who believe in powerful ideas and their ability to change the world. We experiment with radical approaches and bet against the consensus—our efforts are geared towards playing long-term games and maximizing ROI on high-conviction plays. We allow for self-expression and believe work can and should be an avenue for people to create beautiful things that are indistinguishable from art."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Speed"
            secondary="The speed limit doesn't exist, and the standard pace is for chumps. At 2077 Collective, moving fast and making things—whilst honoring our commitment to quality—is a credo that influences our short-term and long-term actions. We're big believers in maintaining a strong bias toward action and prioritizing (rapid) experimentation and execution over (prolonged) analysis and deliberation."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Think and act like winners"
            secondary="We play for keepers and go all in. We don't play the odds or second-guess our chances of success. If no path exists towards achieving our most ambitious goals, we will make one—no obstacle is too large, no setback too damaging, and nothing enough to break our will or destroy our resolve to succeed in the market. We're fearless, persistent, aggressive, relentless and courageous; we're biased towards displaying and enacting radical competence and winning based on merit and the quality of our efforts."
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default OurValues;
