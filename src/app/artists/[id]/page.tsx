import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { artistsData } from '../data';
import { allArtworks } from '../../artworks/data';

export function generateStaticParams() {
   return artistsData.map((a) => ({ id: a.id }));
}

export default async function ArtistDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const artist = artistsData.find(a => a.id === resolvedParams.id) || artistsData[0];
  const artistArtworks = allArtworks.filter(art => art.artist === artist.name);

  return (
    <main style={{ paddingTop: '8rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <Link href="/artists" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Artists
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', marginBottom: '8rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', width: '200px', margin: '0 auto 3rem' }}>
              <img src={artist.img} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h1 className="text-title" style={{ marginBottom: '1.5rem' }}>{artist.name}</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-grey-medium)', marginBottom: '4rem', whiteSpace: 'pre-wrap' }}>
              {artist.bio}
            </p>
          </div>
        </div>

        {artistArtworks.length > 0 && (
          <>
            <h2 className="text-title" style={{ fontSize: '2rem', marginBottom: '4rem', textAlign: 'center' }}>Artworks by {artist.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
              {artistArtworks.map((art) => (
                <Link key={art.id} href={`/artworks/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-grey-dark)', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <img src={art.img} alt={art.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3 className="text-caption" style={{ color: 'var(--color-white)', fontSize: '1rem', marginBottom: '0.25rem' }}>{art.title}</h3>
                  <p className="text-caption" style={{ color: 'var(--color-grey-medium)', fontSize: '0.75rem' }}>{art.material} • {art.year}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}