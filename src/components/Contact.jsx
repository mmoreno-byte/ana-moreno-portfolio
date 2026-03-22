import { useState } from 'react'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)

    try {
      const res = await fetch('https://formspree.io/f/myknqjze', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('ok')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
              <a href="mailto:nanamorenofoto@gmail.com" className="contact__channel">
                <FaEnvelope className="contact__channel-icon" />
                <div>
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">nanamorenofoto@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/nana_m.c_foto"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                <FaInstagram className="contact__channel-icon" />
                <div>
                  <span className="contact__channel-label">Instagram</span>
                  <span className="contact__channel-value">@nana_m.c_foto</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/anamorenocabrera"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
              >
                <FaLinkedin className="contact__channel-icon" />
                <div>
                  <span className="contact__channel-label">LinkedIn</span>
                  <span className="contact__channel-value">Ana Moreno Cabrera</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" placeholder="Tu nombre" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tu@email.com" required />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Asunto</label>
                <input id="subject" name="subject" type="text" placeholder="Fotografía de concierto / Diseño / Otro" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={5} placeholder="Cuéntame tu proyecto..." required />
              </div>

              {status === 'ok' && (
                <p className="contact__feedback contact__feedback--ok">
                  ¡Mensaje enviado! Ana te responderá pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__feedback contact__feedback--error">
                  Algo ha fallado. Inténtalo de nuevo o escribe directamente al email.
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
