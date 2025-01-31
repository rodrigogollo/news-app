import { Article } from "../../typings/article";
import Tags from "../../components/Tags/Tags";

type HeroProps = {
  article: Article
}

const Hero = ({ article }: HeroProps) => {
  const tags = article.tags?.split(",");

  return (
    <main className="mb-10 hover:cursor-pointer">
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
