import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">AM<span className="footer__dot">.</span></span>
            <p className="footer__tagline">Capturando la energía del directo.</p>
          </div>

          <nav className="footer__nav">
            <a href="#galeria">Galería</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="footer__socials">
            {/* SUSTITUYE los href por los perfiles reales */}
            <a href="https://instagram.com/anamoreno" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/anamoreno" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Ana Moreno — Todos los derechos reservados</span>
          <span>Fotografía & Diseño Gráfico · Granada</span>
        </div>
      </div>
    </footer>
  )
}
