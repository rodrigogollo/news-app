import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <footer className="bottom-0 flex-col justify-center align-middle p-2 bg-gray-300 w-full text-center" id='footer'>
      <img className="m-8 mx-auto opacity-25" src="https://vozesdogigante.com.br/novosite/wp-content/uploads/2024/04/logotipo-vdg.svg" alt="logo VDG" />
      <p className='inline-block'>O <strong>Vozes do Gigante</strong> é um canal independente e identificado com o <strong className='text-red-600 font-bold'>Internacional</strong>, que nasceu para aproximar os torcedores de tudo o que envolve o Clube do Povo.</p>
      <div className="inline-flex row-auto justify-around align-middle w-full my-8">
        <a href="https://facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
        <a href="https://x.com" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a href="https://youtube.com" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="https://tiktok.com" target="_blank">
          <FontAwesomeIcon icon={faTiktok} size="xl" />
        </a>
      </div>
      <span>2025 - Todos os direitos reservados</span>
    </footer>
  )
}

export default Footer;
