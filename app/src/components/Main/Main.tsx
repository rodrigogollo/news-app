const Main = ({ articles }) => {
  return (
    <main className="mb-10">
      <article>
        <img className="w-100" src="src/assets/img/teste.jpg" alt="" />
        <div className="m-2">
          <h2 className="text-2xl font-bold">{articles[0].title}</h2>
          <p className="text-sm my-2">{articles[0].description}</p>
        </div>
      </article>
    </main>
  )
}

export default Main;
