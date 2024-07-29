import { useEffect, useState } from "react";
import "./App.css";
import { Article } from "./typings/article";
import Home from "./containers/Home/Home";

function App() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7a4ce95591014fed89a5985058787bab"
    )
      .then((res) => res.json())
      .then((data) => {
        /* console.log(data.articles[0]); */
        setNews(data.articles);
      });
  }, []);

  return (
    <div className="App">
      <Home news={news} /> 
    </div>
  );
}

export default App;
