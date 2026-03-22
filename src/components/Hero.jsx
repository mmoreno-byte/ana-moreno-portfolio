import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__label">Fotografía · Diseño Gráfico · Vélez-Málaga</div>

        <h1 className="hero__title">
          <span className="hero__title-first">Ana</span>
          <span className="hero__title-middle">Moreno</span>
          <span className="hero__title-last">Cabrera</span>
        </h1>

        <p className="hero__sub">
          Fotografía de conciertos y diseño gráfico.<br />
          La energía del directo, en imagen.
        </p>

        <div className="hero__actions">
          <a href="#galeria" className="btn btn--primary">Ver galería</a>
          <a href="#contacto" className="btn btn--ghost">Contactar</a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true"><span /></div>
      <div className="hero__year" aria-hidden="true">© 2026</div>
    </section>
  )
}
