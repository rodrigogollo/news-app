import { Article } from "../../typings/article";
import Tags from "../../components/Tags/Tags";

type HeroProps = {
  article: Article
}

const Hero = ({ article }: HeroProps) => {
  const tags = article.tags?.split(",");

  const classname = "text-md text-white bg-red-600 rounded py-1 px-3 mx-0.5 my-1 font-bold uppercase self-center w-full"
  return (
    <main className="mb-4 hover:cursor-pointer border-b-4 border-gray-400">
      <article>
        <img className="w-100" src={article.image || ""} alt="" />
        {tags && <Tags tags={tags} classname={classname} />}
        <div className="m-2 ">
          <h2 className="text-xl font-bold hover:underline">{article.title}</h2>
          <p className="text-sm my-2">{article.description}</p>
        </div>
      </article>
    </main>
  )
}

export default Hero;
