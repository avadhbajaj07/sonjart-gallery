export default function Artworks() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '2rem' }}>Art Collection</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <a key={i} href={`/artworks/${i}`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-grey-dark)', marginBottom: '1rem', overflow: 'hidden' }}>
               <img src={`https://images.unsplash.com/photo-${1543857778 + i}-c4a1a3e0b2eb?w=800&q=80`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Masterpiece {i}</h3>
            <p className="text-caption">Artist {i} • 2026</p>
          </a>
        ))}
      </div>
    </main>
  );
}