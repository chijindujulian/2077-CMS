import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>Author: {article.author}</p>
          <p>Category: {article.category}</p>
          <p>Published: {article.created_at}</p>
          <p>Views: {article.views}</p>
          <p>{article.content}</p>
          <h3>
            <Link to={`/articles/${article.id}`}>READ MORE</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
