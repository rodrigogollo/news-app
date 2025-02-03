import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const AsideNav = ({ active, setActive }) => {
  return (
    <aside className={`flex flex-col transition-all transition-discrete absolute z-10 w-5/6 top-0 left-0 bg-red-600 h-screen ${active ? "block" : "hidden"}`}>
      <div className="w-full flex flex-row justify-end">
        <FontAwesomeIcon className="m-4 hover:cursor-pointer" size="2xl" icon={faX} onClick={() => setActive(false)} />
      </div>
      <nav>
        <a href="programas">Programas</a>
        <a href="programas">Programas</a>
        <a href="programas">Programas</a>
      </nav>
    </aside>
  )
}

export default AsideNav;
