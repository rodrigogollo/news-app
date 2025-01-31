import { Article } from "../../typings/article";
import Tags from "../../components/Tags/Tags";

type NewsCardProps = {
  article: Article
  index: number
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let dd: string;
  let mm: string;
  let yyyy: string = year.toString();

  day < 10 ? dd = "0" + day : dd = day.toString();
  month < 10 ? mm = "0" + month : mm = month.toString();

  return dd + "/" + mm + "/" + yyyy;
}

const NewsCard = ({ article, index }: NewsCardProps) => {
  const date = formatDate(article.created_at);
  const tags = article.tags?.split(",");

  const classname = "text-xs text-white bg-red-600 rounded-xl py-1 px-3 mx-0.5 my-1 font-bold lowercase"
  return (
    <article className="grid grid-rows-1 grid-cols-3 gap-x-8 my-2 border-b border-gray-300 hover:cursor-pointer" key={article.id}>
      <img
        className="w-40 h-20 mx-2 col-span-1"
        key={index + "_img"}
        src={article.image}
      />
      <div className="col-span-2">
        <p className="font-bold hover:underline" key={index + "_title"}>{article.title}</p>
        <Tags tags={tags} classname={classname} />
        <p className="italic text-right my-1 text-xs" key={index + "_topic"}>{date}</p>
      </div>
    </article>
  )
}

export default NewsCard;
