import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  CardMedia,
  Box,
} from "@mui/material";
import formatDate from "../Utils/DateTimeFormatter";
import { fetchArticles } from "./ArticleApi";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Research
      </Typography>
      <Typography variant="h5" gutterBottom>
        Deep dives and technical analyses on Ethereum infrastructure, protocols,
        and applications
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                alt={article.title}
                height="140"
                image={
                  article.thumb ||
                  "/static/images/cards/contemplative-reptile.jpg"
                }
                sx={{ objectFit: "cover" }} // Ensures image covers the space without distortion
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textTransform: "uppercase" }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                  {article.summary}
                </Typography>
                <Box mb={2} /> {/* Margin bottom for spacing */}
                <Typography variant="body2" color="text.secondary">
                  Author: {article.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(article.created_at)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Views: {article.views}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/articles/${article.id}`}
                  size="small"
                  variant="contained"
                >
                  Read More &#10162;
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ArticleList;
