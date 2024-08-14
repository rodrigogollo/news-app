import { useEffect, useState } from "react";
import "./App.css";
import { Article } from "./typings/article";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=7a4ce95591014fed89a5985058787bab"
  //   )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     /* console.log(data.articles[0]); */
  //     setArticles(data.articles);
  //   });
  // }, [articles]);

  useEffect(() => {
    let articles = [{
      author: "teste",
      content: "enner valencia marca gol",
      description: "enner vlaencia marca gol:",
      publishedAt: "vozes do gigante", 
      source: {
        id: "1c718566-f37d-4be6-ad2f-d4135016bc13",
        name: "é o source",
      },
      title: "enner valencia destaque safafjafajfalfssssssssssssssssssssssssssssssssssssssssssssssssssss",
      url: "www.google.com",
      urlToImage: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    }];
    setArticles(articles);
  }, [])
  
  return (
    <>
      <Navbar />
      {articles ? <Home articles={articles} /> : <p>Loading...</p>} 
      <Footer />
    </>
  );
}

export default App;
