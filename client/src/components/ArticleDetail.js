import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import DOMPurify from "dompurify";
import formatDate from "./DateTimeFormatter";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/articles/${id}/`
        );
        setArticle(response.data);
      } catch (err) {
        console.log("Error fetching article: ", err);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <Container>
      {article ? (
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia
            component="img"
            alt={article.title}
            height="240"
            image={
              article.thumb || "/static/images/cards/contemplative-reptile.jpg"
            }
          />
          <CardContent>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="h6">
              Author: {article.author}
            </Typography>
            <Typography variant="h6">
              {formatDate(article.created_at)}
            </Typography>
            <Box mt={2}>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.content),
                }}
              />
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}

export default ArticleDetail;
