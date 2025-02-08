import Hero from "../../components/Hero/Hero";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import ProgramasContainer from "../../containers/ProgramasContainer/ProgramasContainer";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetch("http://localhost:3000/articles").then((res) => res.json()),
  })

  if (isPending) return <Loading />

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <Hero article={data[0]} />
      <NewsCardList articles={data.slice(1)} />
      <ProgramasContainer />
      <h1>Vídeos</h1>
      <h1>Nós no X</h1>
      <div className="m-2 flex justify-center items-center">
      </div>
    </div>
  )
}


export default HomePage;
