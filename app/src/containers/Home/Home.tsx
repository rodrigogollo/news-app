import { Article } from "../../typings/article";
import Main from "../../components/Main/Main";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import Header from "../../components/Header/Header";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetch("http://localhost:3000/articles").then((res) => res.json()),
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Main articles={data} />
      <NewsCardList articles={data} />
    </>
  )
}


export default HomePage;
