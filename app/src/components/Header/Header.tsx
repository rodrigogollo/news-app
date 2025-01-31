import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AsideNav from "../../components/AsideNav/AsideNav";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleOpen = () => {
    setActive(!active);
  }

  return (
    <div className="border-b-2 border-red-200 mb-4 flex flex-row py-4 justify-center items-center">
      <img className="" src="https://vozesdogigante.com.br/novosite/wp-content/uploads/2024/04/logotipo-vdg.svg" alt="logo VDG" />
      <FontAwesomeIcon className="ml-8 hover:cursor-pointer" size="2xl" icon={faBars} onClick={handleOpen} />
      <AsideNav active={active} setActive={setActive} />
    </div>
  )
}

export default Header;
