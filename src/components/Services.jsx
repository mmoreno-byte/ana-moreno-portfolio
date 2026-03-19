import './Services.css'

const services = [
  {
    num: '01',
    title: 'Fotografía de Conciertos',
    description:
      'Cobertura completa de actuaciones en directo. Captura de momentos únicos con equipos profesionales adaptados a entornos de baja luz y alta energía.',
    tags: ['Pit fotográfico', 'Alta ISO', 'Entrega 48h'],
    price: 'Desde 200€',
  },
  {
    num: '02',
    title: 'Cobertura de Festivales',
    description:
      'Documentación integral de festivales: artistas, ambiente, backstage y detalles que cuentan la historia completa del evento.',
    tags: ['Varios escenarios', 'Galería completa', 'Derechos de uso'],
    price: 'Desde 350€ / día',
  },
  {
    num: '03',
    title: 'Diseño Gráfico',
    description:
      'Identidad visual, carteles, flyers y material digital para artistas, bandas, sellos y promotoras. Diseño que comunica antes de sonar.',
    tags: ['Branding', 'Cartelería', 'RRSS'],
    price: 'Presupuesto a medida',
  },
  {
    num: '04',
    title: 'Packs Artista',
    description:
      'Combinación de fotografía y diseño pensada para músicos independientes: sesión fotográfica, edición y material promocional completo.',
    tags: ['Foto + Diseño', 'EPK', 'Pack digital'],
    price: 'Desde 450€',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Servicios</h2>
        </div>

        <div className="services__grid">
          {services.map(s => (
            <div key={s.num} className="service-card">
              <div className="service-card__top">
                <span className="service-card__num">{s.num}</span>
                <h3 className="service-card__title">{s.title}</h3>
              </div>
              <p className="service-card__desc">{s.description}</p>
              <div className="service-card__tags">
                {s.tags.map(tag => (
                  <span key={tag} className="service-card__tag">{tag}</span>
                ))}
              </div>
              <div className="service-card__footer">
                <span className="service-card__price">{s.price}</span>
                <a href="#contacto" className="service-card__cta">Contactar →</a>
              </div>
            </div>
          ))}
        </div>

        <p className="services__note">
          * Todos los precios son orientativos. Cada proyecto es único — hablemos.
        </p>
      </div>
    </section>
  )
}
