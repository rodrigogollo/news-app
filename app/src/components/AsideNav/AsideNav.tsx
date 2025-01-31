import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const AsideNav = ({ active, setActive }) => {
  return (
    <aside className={`absolute z-10 w-5/6 top-0 left-0 bg-red-600 h-screen ${active ? "block" : "hidden"}`}>
      <FontAwesomeIcon className="ml-8 hover:cursor-pointer mx-auto w-full m-2" size="2xl" icon={faX} onClick={() => setActive(false)} />

    </aside>
  )
}

export default AsideNav;
