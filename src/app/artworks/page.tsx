'use client';
import Link from 'next/link';

import { allArtworks } from './data';

export default function Artworks() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
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