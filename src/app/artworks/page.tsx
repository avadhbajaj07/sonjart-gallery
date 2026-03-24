'use client';
import Link from 'next/link';

const allArtworks = [
  { id: 1, img: '/assets/art1.jpg', title: 'Absence of Color', artist: 'Henk Vierveijzer', year: '2023', originalPrice: 4500, discount: 15, discountPrice: 3825 },
  { id: 2, img: '/assets/art2.jpg', title: 'Monochrome Dream', artist: 'Beatrice Jud', year: '2024', originalPrice: 3200, discount: 10, discountPrice: 2880 },
  { id: 3, img: '/assets/art3.jpg', title: 'Abstract Reality', artist: 'F. Escobar', year: '2025', originalPrice: 5800, discount: 20, discountPrice: 4640 },
  { id: 4, img: '/assets/art4.jpg', title: 'Visions of Light', artist: 'Nicole Laceur', year: '2023', originalPrice: 2900, discount: 5, discountPrice: 2755 },
  { id: 5, img: '/assets/art5.jpg', title: 'Echoes I', artist: 'Elso Schiavo', year: '2026', originalPrice: 4100, discount: 12, discountPrice: 3608 },
  { id: 6, img: '/assets/art6.jpg', title: 'Spatial Void', artist: 'Nicole Janssen', year: '2026', originalPrice: 5200, discount: 15, discountPrice: 4420 },
  { id: 7, img: '/assets/art7.jpg', title: 'Echoes II', artist: 'Nicole Janssen', year: '2026', originalPrice: 5200, discount: 15, discountPrice: 4420 },
  { id: 8, img: '/assets/art8.jpg', title: 'Fragmented', artist: 'F. Escobar', year: '2025', originalPrice: 4800, discount: 18, discountPrice: 3936 },
  { id: 9, img: '/assets/art9.jpg', title: 'Spectrum', artist: 'Beatrice Jud', year: '2023', originalPrice: 3600, discount: 10, discountPrice: 3240 },
  { id: 10, img: '/assets/art10.jpg', title: 'Lost Forms', artist: 'Elso Schiavo', year: '2022', originalPrice: 3900, discount: 15, discountPrice: 3315 },
  { id: 11, img: '/assets/S030.JPG', title: 'A lady reading', artist: 'Nicole Laceur', year: '2026', originalPrice: 3900, discount: 70, discountPrice: 1170 },
  { id: 12, img: '/assets/2801.jpg', title: 'Untitled (yellow ladies)', artist: 'Corneille', year: '1991', originalPrice: 1100, discount: 50, discountPrice: 550 },
  { id: 13, img: '/assets/S098.JPG', title: 'Longing', artist: 'Nicole Janssen', year: '2026', originalPrice: 4200, discount: 80, discountPrice: 840 },
  { id: 14, img: '/assets/S108.JPG', title: 'Wut', artist: 'Beatrice Jud', year: '2026', originalPrice: 5500, discount: 50, discountPrice: 2750 },
];

export default function Artworks() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '4rem' }}>Art Collections</h1>
      
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