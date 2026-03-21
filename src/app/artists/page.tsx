import Link from 'next/link';
import { artistsData } from './data';

export default function Artists() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '4rem' }}>Gallery Artists</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '4rem' }}>
        {artistsData.map(artist => (
          <Link key={artist.id} href={`/artists/${artist.id}`} style={{ display: 'block', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', margin: '0 auto 1.5rem', width: '80%', backgroundColor: 'var(--color-grey-dark)' }}>
               <img src={artist.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'opacity var(--transition-slow)' }} alt={artist.name} />
            </div>
            <h3 style={{ fontSize: '1.5rem' }}>{artist.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}