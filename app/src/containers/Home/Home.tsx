import Hero from "../../components/Hero/Hero";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetch("http://localhost:3000/articles").then((res) => res.json()),
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <Hero article={data[0]} />
      <NewsCardList articles={data.slice(1)} />
    </div>
  )
}


export default HomePage;
