import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ArticleDetail.css";
import DOMPurify from "dompurify";
import formatDate from "./DateTimeFormatter";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch article details
    axios
      .get(`http://127.0.0.1:8000/api/articles/${id}/`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        console.log("Error fetching article: ", err);
      });

    // Increment view count
    axios
      .post(`http://127.0.0.1:8000/api/articles/${id}/increment-views/`)
      .catch((err) => {
        console.log("Error incrementing views: ", err);
      });
  }, [id]);
  return (
    <div>
      <div className="article">
        {article ? (
          <div className="article-cont">
            <h1>{article.title}</h1>
            <h4>
              <span>Author: {article.author}</span>
              <span> | Views: {article.views}</span>
            </h4>
            <h4>Category: {article.category}</h4>

            <h4>{formatDate(article.created_at)}</h4>
            <br />
            <div
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content), // Sanitize the HTML to avoid XSS attacks
              }}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ArticleDetail;
