import type { Metadata } from 'next';
import { allArtworks } from './data';
import ArtworksClient from './ArtworksClient';

export const metadata: Metadata = {
  title: 'Art Collections | sonjART | Exclusive Contemporary Paintings',
  description: 'Explore our curated collection of original contemporary paintings. Available for acquisition at special exhibition prices due to relocation. Worldwide shipping available from Zürich.',
};

export default function Artworks() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '1rem' }}>Art Collections</h1>
      
      <div style={{ marginBottom: '6rem', maxWidth: '800px' }}>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-medium)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          If you feel connected to one of these artworks, please don’t hesitate to call or write.
        </p>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--color-white)', fontWeight: 300 }}>
          This is a rare opportunity to acquire original pieces at exceptional prices due to relocation.
        </p>
      </div>
      
      <ArtworksClient allArtworks={allArtworks as any} />
    </main>
  );
}