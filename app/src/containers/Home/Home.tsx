import { Article } from "../../typings/article";
import Main from "../../components/Main/Main";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import Header from "../../components/Header/Header";

type HomeProps = {
  articles: Article[]
}

const HomePage = ({ articles }: HomeProps) => {
  return (
    <>
      <Main articles={articles} />
      <NewsCardList articles={articles} />
    </>
  )
}


export default HomePage;
