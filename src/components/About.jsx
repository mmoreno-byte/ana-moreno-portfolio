import './About.css'

const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '200+', label: 'Conciertos fotografiados' },
  { value: '30+', label: 'Festivales cubiertos' },
  { value: '∞', label: 'Energía en el directo' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about__grid">
          {/* Imagen */}
          <div className="about__image-wrap">
            {/* 
              REEMPLAZA esta URL por una foto real de Ana:
              import anaPhoto from '../assets/ana.jpg'
              y usa: <img src={anaPhoto} ... />
            */}
            <img
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&q=80"
              alt="Ana Moreno — fotógrafa"
              className="about__image"
            />
            <div className="about__image-border" aria-hidden="true" />
            <div className="about__image-label">Granada, España</div>
          </div>

          {/* Texto */}
          <div className="about__text">
            <div className="section-header">
              <span className="section-num">03</span>
              <h2 className="section-title">Sobre mí</h2>
            </div>

            <p className="about__bio">
              Soy Ana Moreno, fotógrafa especializada en música en directo y diseñadora gráfica. 
              Mi trabajo nace de la pasión por capturar esos instantes únicos que ocurren entre 
              el artista y el público: la mirada perdida en la canción, el sudor bajo los focos, 
              la electricidad del primer acorde.
            </p>
            <p className="about__bio">
              Combino la fotografía de conciertos con el diseño gráfico para ofrecer a artistas, 
              festivales y promotoras una imagen visual completa y coherente.
            </p>

            {/* Stats */}
            <div className="about__stats">
              {stats.map(s => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
