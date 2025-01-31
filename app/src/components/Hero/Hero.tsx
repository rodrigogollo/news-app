import { Article } from "../../typings/article";
import Tags from "../../components/Tags/Tags";

type HeroProps = {
  article: Article
}

const Hero = ({ article }: HeroProps) => {
  const tags = article.tags?.split(",");

  return (
    <main className="mb-4 hover:cursor-pointer border-b-4 border-gray-400">
      <article>
        {tags && <Tags tags={tags} />}
        <img className="w-100" src={article.image || ""} alt="" />
        <div className="m-2 ">
          <h2 className="text-xl font-bold hover:underline">{article.title}</h2>
          <p className="text-sm my-2">{article.description}</p>
        </div>
      </article>
    </main>
  )
}

export default Hero;
