import NewsAside from "../../containers/NewsAside/NewsAside";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <article>
	      <h1>Últimas Notícias</h1>
	      <img src="src/assets/img/teste.jpg" alt="" />
      </article>
      <NewsAside />
    </section>
  )
}

export default Header;
