const Navbar = () => {
  return (
    <nav className="hidden">
      <ul className="flex flex-column justify-evenly p-4 bg-red-600 text-white ">
        <a className="hover:underline" href="#home"><li>Home</li></a>
        <a className="hover:underline" href="#footer"><li>Últimas Notícias</li></a>
        <a className="hover:underline" href="#"><li>Mercado da Bola</li></a>
        <a className="hover:underline" href="#"><li>Nosso Time</li></a>
        <a className="hover:underline" href="#"><li>Parceiros</li></a>
        <a className="hover:underline" href="#"><li>Programas</li></a>
      </ul>
    </nav>
  )
}

export default Navbar;
