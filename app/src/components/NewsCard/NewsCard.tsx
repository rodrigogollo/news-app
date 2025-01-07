import { Article } from "../../typings/article";

type NewsCardProps = {
  article: Article
  index: number
}

const handleTeste = (event) => {
  console.log(event.target);
  event.target.src = "src/assets/img/bob.jpg"
}

const NewsCard = ({ article, index }: NewsCardProps) => {
  return (
    <article className="news_article" key={index + "_article"}>
      <img
        key={index + "_img"}
        src={article.urlToImage}
        onClick={handleTeste}
      />
      <p key={index + "_title"}>{article.title}</p>
    </article>
  )
}

export default NewsCard;
