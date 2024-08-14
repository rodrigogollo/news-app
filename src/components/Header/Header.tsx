import "./Header.css";
import { useState } from "react";

const Header = ({articles}) => {
  
  const [title, setTitle] = useState("Enner valencia faz gol");

  const handleClickRight = (event) => {
    setTitle("mudou");
  }

  return (
    <section className="header">
      <button className="arrow" onClick={handleClickRight}> {"<"} </button>
      <article>
	<div>
	  <span className="tag"># Últimas Notícias</span>
	  <h2>{title}</h2>
	  <p>asaflaljfsafaflkjalksfksafkjlfaskljasflksflkj</p>
	  <div>
	    <p><span>Por: </span>Redação Vozes</p>
	    <p>03 de Agostos de 2024</p>
	  </div>
	</div>
	  <img src="src/assets/img/teste.jpg" alt="" />
      </article>
      <button className="arrow" onClick={handleClickRight}> {">"} </button>
    </section>
  )
}

export default Header;
