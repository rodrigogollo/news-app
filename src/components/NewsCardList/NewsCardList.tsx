import "./NewsCardList.css"
import { Article } from "../../typings/article";
import NewsCard from "../NewsCard/NewsCard";

type NewsCardListProps = {
	articles: Article[]
}

const NewsCardList = ({ articles }:NewsCardListProps) => {
	return (
		<>
		{
			articles.map((article:Article) => (
				<NewsCard article={article} index={Number(article.source.id)} />
			))
		}
		</>
	)
}

export default NewsCardList;
