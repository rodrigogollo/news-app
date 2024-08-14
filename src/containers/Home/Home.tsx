import { Article } from "../../typings/article";
import Header from "../../components/Header/Header";
import "./Home.css";
import NewsCardList from "../../components/NewsCardList/NewsCardList";

type HomeProps = {
  articles: Article[]
}

const HomePage = ({ articles }: HomeProps) => {
  return ( 
    <>
      <h1>Vozes do Gigante</h1>
      <Header />
      <NewsCardList articles={articles} />
    </>
  )
}


export default HomePage;
