import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { artistsData } from '../data';

export function generateStaticParams() {
   return artistsData.map((a) => ({ id: a.id }));
}

export default async function ArtistDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const artist = artistsData.find(a => a.id === resolvedParams.id) || artistsData[0];

  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container">
        <Link href="/artists" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Artists
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', width: '200px', margin: '0 auto 3rem' }}>
              <img src={artist.img} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
            </div>
            <h1 className="text-title" style={{ marginBottom: '1.5rem' }}>{artist.name}</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-grey-medium)', marginBottom: '4rem', whiteSpace: 'pre-wrap' }}>
              {artist.bio}
            </p>
          </div>
        </div>
        <h2 className="text-title" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Artworks by {artist.name}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
           <a href={`/artworks/1`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-grey-dark)', marginBottom: '1rem', overflow: 'hidden' }}>
               <img src={artist.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Featured Piece</h3>
            <p className="text-caption">2026</p>
          </a>
        </div>
      </div>
    </main>
  );
}