import { useState } from 'react'
import './Gallery.css'

// ── AÑADE AQUÍ LAS FOTOS DE ANA ──
// Sustituye las URLs de Unsplash por rutas locales: import foto1 from '../assets/foto1.jpg'
// o por las URLs de las fotos reales.
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
    alt: 'Concierto de rock — guitarrista en el escenario',
    category: 'Conciertos',
    size: 'tall',   // tall = imagen alta (ocupa 2 filas)
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
    alt: 'Festival de música — multitud bajo las luces',
    category: 'Festivales',
    size: 'wide',   // wide = imagen ancha (ocupa 2 columnas)
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    alt: 'Cantante en el escenario',
    category: 'Conciertos',
    size: 'normal',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    alt: 'DJ en festival nocturno',
    category: 'Festivales',
    size: 'normal',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    alt: 'Público en concierto con luces',
    category: 'Conciertos',
    size: 'wide',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80',
    alt: 'Baterista en vivo',
    category: 'Backstage',
    size: 'normal',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    alt: 'Luces de escenario — festival',
    category: 'Festivales',
    size: 'tall',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    alt: 'Retrato artístico — backstage',
    category: 'Backstage',
    size: 'normal',
  },
]

const categories = ['Todos', ...new Set(photos.map(p => p.category))]

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'Todos' ? photos : photos.filter(p => p.category === active)

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Galería</h2>
        </div>

        {/* Filtros */}
        <div className="gallery__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery__filter ${active === cat ? 'gallery__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {filtered.map(photo => (
            <div
              key={photo.id}
              className={`gallery__item gallery__item--${photo.size}`}
              onClick={() => setLightbox(photo)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-cat">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" aria-label="Cerrar">✕</button>
          <img
            src={lightbox.src.replace('w=800', 'w=1400')}
            alt={lightbox.alt}
            onClick={e => e.stopPropagation()}
          />
          <p className="lightbox__caption">{lightbox.alt}</p>
        </div>
      )}
    </section>
  )
}
