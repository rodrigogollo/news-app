import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null | string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

function App() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7a4ce95591014fed89a5985058787bab"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles[0]);
        setNews(data.articles);
      });
  }, []);
  return (
    <div className="App">
      <h1>News APP</h1>
      <div className="news-container">
        {news.map((article, index) => {
          return (
            <div className="article">
              <p key={index + "_title"}>{article.title}</p>;
              <img
                key={index + "_img"}
                src={article.urlToImage}
                width={300}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
