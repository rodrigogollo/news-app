import { Article } from "../../typings/article";
import NewsCard from "../NewsCard/NewsCard";

type NewsCardListProps = {
  articles: Article[]
}

const NewsCardList = ({ articles }: NewsCardListProps) => {
  return (
    <section className="news_list">
      {
        articles.map((article: Article) => (
          <>
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
            <NewsCard article={article} index={Number(article.source.id)} />
          </>
        ))
      }
    </section>
  )
}

export default NewsCardList;
