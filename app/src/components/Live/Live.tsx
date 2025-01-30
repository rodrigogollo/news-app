import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Live = () => {

  return (
    <a href="https://www.youtube.com" target="_blank" className="bg-white my-4 mx-2 border-red-600 border rounded flex flex-row justify-start items-center h-8 text-center overflow-hidden text-nowrap">
      <div className="h-full bg-red-600 flex flex-row items-center mr-2 p-2">
        <FontAwesomeIcon className="text-white mr-2 animate-pulse" icon={faCircle} size="sm" />
        <p className="text-white text-bold uppercase text-center flex-grow min-w-16">Ao Vivo</p>
      </div>
      <p className="text-gray-700 text-bold font-bold uppercase flex-shrink">EXVDG 201 - LATERAL PRÓXIMO DE ANÚNCIO | BUSCA POR REFORÇOS CONTINUA | ROGER VAI PRESERVAR?</p>
    </a>
  )
}

export default Live;
