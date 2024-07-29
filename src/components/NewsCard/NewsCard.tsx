import { Article } from "../../typings/article";

type NewsCardProps = {
	article: Article
	index: number
}

const NewsCard = ({ article, index }: NewsCardProps) => {
	return (
		<div className="article" key={index + "_article"}>
		  <img
			key={index + "_img"}
			src={article.urlToImage}
			width={130}
			height={80}
		  />
		  <p key={index + "_title"}>{article.title}</p>
		</div>
	)
}

export default NewsCard;
