import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import DOMPurify from "dompurify";
import formatDate from "./DateTimeFormatter";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/articles/")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log("Error fetching article: ", err);
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
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={article.title}
                height="140"
                image={
                  article.thumb ||
                  "/static/images/cards/contemplative-reptile.jpg"
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(article.summary),
                    }}
                  />
                </Typography>

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
                  Read More
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
