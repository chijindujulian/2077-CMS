import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import "../../styles/styles.css";
import DOMPurify from "dompurify";
import formatDate from "../Utils/DateTimeFormatter";
import { fetchArticle } from "./ArticleApi";
import { formatArticleData } from "./ArticleUtils";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle(id).then((data) => {
      const formattedArticle = formatArticleData(data);
      setArticle(formattedArticle);
    });
  }, [id]);

  return (
    <Container>
      {article ? (
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia
            component="img"
            alt={article.title}
            height="240"
            image={article.thumb} // Correctly formatted thumb URL
          />
          <CardContent>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="h6">
  Author(s): {article.authors.map(author => author.username).join(', ')}
</Typography>
            <Typography variant="h6">
              {formatDate(article.created_at)}
            </Typography>
            <Box mt={2}>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.content),
                }}
                style={{
                  maxWidth: "100%", // Ensure content width does not exceed container
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
