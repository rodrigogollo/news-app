import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Live = () => {
  return (
    <div className="my-4 mx-2 border-red-600 border rounded flex flex-row justify-start items-center h-8 text-center">
      <div className="h-full bg-red-600 flex flex-row items-center mr-2 p-2">
        <FontAwesomeIcon className="text-white mr-2" icon={faCircle} size="sm" />
        <p className="text-white text-bold uppercase text-center">Ao Vivo</p>
      </div>
      <p className="text-gray-700 text-bold font-bold uppercase bg-white">Expresso VDG</p>
    </div>
  )
}

export default Live;
