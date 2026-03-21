'use client';
import Link from 'next/link';

const allArtworks = [
  { id: 1, img: '/assets/art%20gallery1.jpg', title: 'Absence of Color', artist: 'Henk Vierveijzer', year: '2023' },
  { id: 2, img: '/assets/art%20gallery2.jpg', title: 'Monochrome Dream', artist: 'Beatrice Jud', year: '2024' },
  { id: 3, img: '/assets/art%20gallery3.jpg', title: 'Abstract Reality', artist: 'F. Escobar', year: '2025' },
  { id: 4, img: '/assets/art%20gallery4.jpg', title: 'Visions of Light', artist: 'Nicole Laceur', year: '2023' },
  { id: 5, img: '/assets/art%20gallery5.jpg', title: 'Echoes I', artist: 'Elso Schiavo', year: '2026' },
  { id: 6, img: '/assets/art%20gallery6.jpg', title: 'Spatial Void', artist: 'Nicole Janssen', year: '2026' },
  { id: 7, img: '/assets/art7.jpg', title: 'Echoes II', artist: 'Nicole Janssen', year: '2026' },
  { id: 8, img: '/assets/art8.jpg', title: 'Fragmented', artist: 'F. Escobar', year: '2025' },
  { id: 9, img: '/assets/art9.jpg', title: 'Spectrum', artist: 'Beatrice Jud', year: '2023' },
  { id: 10, img: '/assets/art10.jpg', title: 'Lost Forms', artist: 'Elso Schiavo', year: '2022' },
];

export default function Artworks() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '4rem' }}>Art Collection</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
        {allArtworks.map((art) => (
          <Link key={art.id} href={`/artworks/${art.id}`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-black)', marginBottom: '1.5rem', overflow: 'hidden' }}>
               <img 
                 src={art.img} 
                 alt={art.title} 
                 style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }} 
                 onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                 onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
               />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-white)' }}>{art.title}</h3>
                <p style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.artist}</p>
              </div>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>{art.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}