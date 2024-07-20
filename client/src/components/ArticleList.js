import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/ArticleList.css";
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
    <div>
      <h1 className="article-head">Articles</h1>
      <div className="articles">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <h2>{article.title}</h2>

            <h4>
              <span>Author: {article.author}</span>
              <span> | Views: {article.views}</span>
            </h4>
            <h4>Category: {article.category}</h4>

            <h4>{formatDate(article.created_at)}</h4>
            <br />
            <p
              className="summary"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.summary), // Sanitize the HTML to avoid XSS attacks
              }}
            />

            <button className="article-card-bttn">
              <Link to={`/articles/${article.id}`}>READ MORE&rarr;</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
