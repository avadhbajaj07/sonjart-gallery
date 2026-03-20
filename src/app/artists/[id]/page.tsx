import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function ArtistDetail() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container">
        <Link href="/artists" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Artists
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', width: '200px', margin: '0 auto 3rem' }}>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
            </div>
            <h1 className="text-title" style={{ marginBottom: '1.5rem' }}>Elena Rostova</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-grey-medium)', marginBottom: '4rem' }}>
              Born in 1988, Elena Rostova's work centers on the geometry of silence and emotional resonance in liminal spaces.
            </p>
          </div>
        </div>
        <h2 className="text-title" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Artworks by Elena</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
           <a href={`/artworks/1`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-grey-dark)', marginBottom: '1rem', overflow: 'hidden' }}>
               <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>The Silence</h3>
            <p className="text-caption">2025</p>
          </a>
        </div>
      </div>
    </main>
  );
}