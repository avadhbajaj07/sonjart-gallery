'use client';
import Link from 'next/link';

const allArtworks = [
  { id: 11, img: '/assets/S030.JPG', title: 'A lady reading', artist: 'Nicole Laceur', year: '2026', originalPrice: 3900, discount: 70, discountPrice: 1170 },
  { id: 12, img: '/assets/2801.jpg', title: 'Untitled (yellow ladies)', artist: 'Corneille', year: '1991', originalPrice: 1100, discount: 50, discountPrice: 550 },
  { id: 13, img: '/assets/S098.JPG', title: 'Longing', artist: 'Nicole Janssen', year: '2026', originalPrice: 4200, discount: 80, discountPrice: 840 },
  { id: 14, img: '/assets/S108.JPG', title: 'Wut', artist: 'Beatrice Jud', year: '2026', originalPrice: 5500, discount: 50, discountPrice: 2750 },
  { id: 15, img: '/assets/S026.JPG', title: 'Autumn in Paris', artist: 'Cees Müller', year: '2026', originalPrice: 5900, discount: 60, discountPrice: 2360 },
  { id: 16, img: '/assets/Toro Small I.JPG', title: 'Toro 2', artist: 'F. Escobar', year: '2026', originalPrice: 2000, discount: 70, discountPrice: 600 },
  { id: 17, img: '/assets/4121.JPG', title: 'Real life 4', artist: 'F. Escobar', year: '2026', originalPrice: 5500, discount: 80, discountPrice: 1100 },
  { id: 18, img: '/assets/S480.JPG', title: 'Naked Lady in yellow room', artist: 'Henk Vierveijzer', year: '2026', originalPrice: 5500, discount: 50, discountPrice: 2750 },
];

export default function Artworks() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '4rem' }}>Art Collections</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
        {allArtworks.map((art) => (
          <Link key={art.id} href={`/artworks/${art.id}`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-black)', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img 
                 src={art.img} 
                 alt={art.title} 
                 style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform var(--transition-slow)' }} 
                 onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                 onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
               />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-white)' }}>{art.title}</h3>
                <p style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.artist}</p>
                <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                   <span style={{ fontSize: '1rem', color: 'var(--color-white)', fontWeight: 500 }}>CHF {(art as any).discountPrice?.toLocaleString()}</span>
                   <span style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)', textDecoration: 'line-through' }}>CHF {(art as any).originalPrice?.toLocaleString()}</span>
                </div>
              </div>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>{art.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}