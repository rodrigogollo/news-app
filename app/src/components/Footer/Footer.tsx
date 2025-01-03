import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare, faYoutubeSquare, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <footer className="bottom-0 flex-col justify-center align-middle p-8 bg-gray-200 w-full" id='footer'>
      <p className='inline-block'>O Vozes do Gigante é um canal independente e identificado com o Internacional, que nasceu para aproximar os torcedores de tudo o que envolve o Clube do Povo.</p>
      <div className="inline-flex row-auto justify-around align-middle">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faYoutubeSquare} />
        <FontAwesomeIcon icon={faInstagramSquare} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
      <p>2024 - Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer;
