import "./NewsCard.css";
import { Article } from "../../typings/article";

type NewsCardProps = {
	article: Article
	index: number
}

const NewsCard = ({ article, index }: NewsCardProps) => {
	return (
		<article key={index + "_article"}>
		  <img
			key={index + "_img"}
			src={article.urlToImage}
		  />
		  <p key={index + "_title"}>{article.title}</p>
		</article>
	)
}

export default NewsCard;
