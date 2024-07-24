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
import "../styles/styles.css";

const backendBaseUrl = "http://127.0.0.1:8000"; // Backend URL

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${backendBaseUrl}/api/articles/${id}/`
        );
        const data = response.data;

        // Clean up unwanted HTML tags
        const cleanedContent = data.content.replace(/<p>&nbsp;<\/p>/g, '');

        // Replace image URLs in content
        const updatedContent = cleanedContent.replace(
          /src="\/media\//g,
          `src="${backendBaseUrl}/media/`
        );

        // Ensure thumb URL is correctly formatted
        const updatedThumb = data.thumb
          ? `${data.thumb}`
          : "/static/images/cards/contemplative-reptile.jpg";

        setArticle({
          ...data,
          content: updatedContent, // Replace content with updated image URLs and cleaned HTML
          thumb: updatedThumb, // Ensure thumb path is correct
        });
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
            image={article.thumb} // Correctly formatted thumb URL
          />
          <CardContent>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="h6">Author: {article.author}</Typography>
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
