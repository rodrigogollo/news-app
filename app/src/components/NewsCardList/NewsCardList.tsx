import { Article } from "../../typings/article";
import NewsCard from "../NewsCard/NewsCard";

type NewsCardListProps = {
  articles: Article[]
}

const NewsCardList = ({ articles }: NewsCardListProps) => {
  return (
    <section className="m-2 overflow-hidden text-wrap">
      {
        articles.map((article: Article) => (
          <NewsCard article={article} index={Number(article.id)} />
        ))
      }
    </section>
  )
}

export default NewsCardList;
