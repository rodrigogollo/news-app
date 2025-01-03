import "./Main.css";
import { useState } from "react";

const Main = ({articles}) => {
  
  const [title, setTitle] = useState("Precisamos admitir a realidade sobre Roger e também a verdadeira briga do Inter no Brasileirão");
  const [description, setDescription] = useState("O resultado não é bom. Não é nada bom. Tenho certeza que uma galera ficou mais aliviada com o empate e a entrega física no finalzinho, mas o pontinho somado deixa o Inter ainda a um ponto do Z4 (eu sei, tem rodadas atrasadas), mas ainda assim tem muito risco. É mega desconfortável estar ali.");

  const handleClickRight = (event) => {
    setTitle("mudou");
  }

  return (
    <main className="main">
      <button className="arrow" onClick={handleClickRight}>{"<"}</button>
      <article>
	<div>
	  <span className="tag"># Últimas Notícias</span>
	  <h2>{title}</h2>
	  <p>{description}</p>
	  <div>
	    <p><span>Por: </span>Redação Vozes</p>
	    <p>03 de Agostos de 2024</p>
	  </div>
	</div>
	  <img src="src/assets/img/teste.jpg" alt="" />
      </article>
      <button className="arrow" onClick={handleClickRight}>{">"}</button>
    </main>
  )
}

export default Main;
