import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <span className="text-red-600 animate-spin text-2xl w-screen text-center">
      <FontAwesomeIcon className="animate-spin" icon={faCircleNotch} size="2xl" />
    </span>
  )
}

export default Loading;
