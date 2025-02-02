import React from "react";
import Programa from "../../components/Programa/Programa";

const ProgramasContainer = () => {
  return (
    <section className="my-4 border-b-4 border-red-600 p-2">
      <h1 className="text-red-600 text-4xl font-bold font-mono uppercase">Programas</h1>
      <Programa name="Entre Vozes" desc="1h30 de Informações atualizadas e muito debate sobre as últimas do Internacional. O programa conta com uma equipe de jornalistas e setoristas identificados com o Inter, além de convidados especiais, que estão sempre prontos para informar, discutir e analisar os principais acontecimentos e o dia-a-dia do clube." image="https://vozesdogigante.com.br/novosite/wp-content/uploads/2025/01/Thumb_03-2.jpg" />
      <Programa name="Maratona +Q45" desc="Uma transmissão totalmente dedicada aos jogos do Internacional, onde o principal objetivo é proporcionar aos torcedores a cobertura completa das partidas, desde o pré até o pós-jogo. Na Maratona +Q45, você faz parte do espetáculo, escreve comentários e opiniões. Além, é claro, de acompanhar o ambiente do jogo e sentir a emoção de outros torcedores, que compartilham suas expectativas e reações através de entrevistas. Após o apito final, trazemos toda repercussão do vestiário colorado, zona mista, bastidores, opiniões e muito mais." image="https://img.youtube.com/vi/QdKw7yA5hbQ/sddefault.jpg" />
      <Programa name="Expresso VDG" desc="O Expresso de notícias do Inter na sua manhã. São 60 minutos de muita informação e interatividade. Apresentado por Douglas Demoliner, o programa aborda notícias, análises, entrevistas e curiosidades sobre o time colorado e o mundo do futebol." image="https://vozesdogigante.com.br/novosite/wp-content/uploads/2025/01/EX_Thumb_04-1.jpg" />
      <Programa name="VDG Entrevista" desc="Um programa voltado a personalidades que têm relevância na história do Inter. O objetivo é que os convidados compartilhem suas histórias, conquistas, desafios e momentos marcantes vividos durante suas trajetórias no clube. Além de falarem sobre suas opiniões e visões sobre o futebol de modo geral." image="https://img.youtube.com/vi/wEz77rq5SOM/sddefault.jpg" />
    </section>
  )
}

export default ProgramasContainer;
