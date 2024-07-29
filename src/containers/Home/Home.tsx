import { Article } from "../../typings/article";
import NewsCard from "../../components/NewsCard/NewsCard";

type HomeProps = {
  news: Article[]
}

const HomePage = ({ news }: HomeProps) => {
  return <>
      <h1>News APP</h1>
      <div className="news-container">
        {news.map((article, index) => {
          return (
            <NewsCard article={article} index={index} /> 
          );
        })}
      </div>
  </>
}

export default HomePage;
