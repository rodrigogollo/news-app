import { Article } from "../../typings/article";

type NewsCardProps = {
  article: Article
  index: number
}

const NewsCard = ({ article, index }: NewsCardProps) => {
  article.publishedAt = "7 hrs ago"
  article.tag = "Asia"
  return (
    <article className="flex flex-row my-2 py-2 border-b-2 border-gray-50" key={article.id}>
      <img
        className="w-40 h-20 mx-2"
        key={index + "_img"}
        src={article.urlToImage}
      />
      <p key={index + "_title"}>{article.title}</p>
      <p key={index + "_topic"}>{article.publishedAt + " | " + article.tag}</p>
    </article>
  )
}

export default NewsCard;
