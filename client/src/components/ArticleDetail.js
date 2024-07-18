import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/articles/${id}/`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        console.log("Error fetching article: ", err);
      });
  }, [id]);
  return (
    <div>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ArticleDetail;
