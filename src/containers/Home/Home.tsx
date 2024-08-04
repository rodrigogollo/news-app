import { Article } from "../../typings/article";
import Header from "../../components/Header/Header";
import "./Home.css";

type HomeProps = {
  news: Article[]
}

const HomePage = ({ news }: HomeProps) => {
  return <>
      <h1>Vozes do Gigante</h1>
      <Header />
      <div className="news-container">
        {
          news.map((article, index) => {
            return <NewsCard article={article} index={index} /> 
          })
        }
      </div>
  </>
}


export default HomePage;
