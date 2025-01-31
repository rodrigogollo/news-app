import { Article } from "../../typings/article";
import { formatDate } from "../../utils/utils";

type NewsCardProps = {
  article: Article
  index: number
}

const NewsCardShort = ({ article, index }: NewsCardProps) => {
  const date = formatDate(article.created_at);

  return (
    <article className="grid grid-rows-1 grid-cols-2 gap-x-8 my-2 border-b border-gray-300 hover:cursor-pointer" key={article.id}>
      <div className="col-span-2">
        <p className="font-bold hover:underline" key={index + "_title"}>{article.title}</p>
        <p className="italic text-sm my-2" key={index + "_desc"}>{article.description}</p>
        <p className="italic text-right my-1 text-xs" key={index + "_topic"}>{date}</p>
      </div>
    </article>
  )
}

export default NewsCardShort;
