import { Article } from "../../typings/article";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardShort from "../NewsCardShort/NewsCardShort";

type NewsCardListProps = {
  articles: Article[]
}

const NewsCardList = ({ articles }: NewsCardListProps) => {

  const articlesBig = articles.slice(0, 2);
  const articlesShort = articles.slice(2);

  return (
    <section className="m-2 overflow-hidden text-wrap">
      {
        articlesBig.map((article: Article) => {
          const tags = article.tags?.split(",");
          return <NewsCard article={article} index={Number(article.id)} />
        })
      }

      {
        articlesShort.map((article: Article) => {
          const tags = article.tags?.split(",");
          return <NewsCardShort article={article} index={Number(article.id)} />
        })
      }
    </section>
  )
}

export default NewsCardList;
