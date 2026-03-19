import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <div className="section-header">
              <span className="section-num">05</span>
              <h2 className="section-title">Hablemos</h2>
            </div>
            <p className="contact__text">
              ¿Tienes un concierto que fotografiar, un festival que cubrir o un proyecto 
              de diseño en mente? Escríbeme y lo hablamos sin compromiso.
            </p>

            <div className="contact__channels">
              {/* Email — SUSTITUYE por el email real de Ana */}
              <a href="mailto:ana@ejemplo.com" className="contact__channel">
                <FaEnvelope className="contact__channel-icon" />
                <div>
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">ana@ejemplo.com</span>
                </div>
              </a>

              {/* Instagram — SUSTITUYE por el usuario real */}
              <a
                href="https://instagram.com/anamoreno"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                <FaInstagram className="contact__channel-icon" />
                <div>
                  <span className="contact__channel-label">Instagram</span>
                  <span className="contact__channel-value">@anamoreno</span>
                </div>
              </a>

              {/* LinkedIn — SUSTITUYE por el usuario real */}
              <a
                href="https://linkedin.com/in/anamoreno"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                <FaLinkedin className="contact__channel-icon" />
                <div>
                  <span className="contact__channel-label">LinkedIn</span>
                  <span className="contact__channel-value">Ana Moreno</span>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact__form-wrap">
            <form
              className="contact__form"
              onSubmit={e => {
                e.preventDefault()
                // Para un formulario funcional sin backend, puedes usar:
                // Formspree (formspree.io) — gratuito, solo cambia la action del form
                alert('Formulario enviado. (Conecta Formspree para hacerlo funcional)')
              }}
            >
              <div className="form-field">
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" placeholder="Tu nombre" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="tu@email.com" required />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Asunto</label>
                <input id="subject" type="text" placeholder="Fotografía de concierto / Diseño / Otro" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows={5} placeholder="Cuéntame tu proyecto..." required />
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
