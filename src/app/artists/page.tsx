export default function Artists() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '4rem' }}>Artists</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
        {[1, 2, 3, 4].map(i => (
          <a key={i} href={`/artists/elena`} style={{ display: 'block', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', margin: '0 auto 1.5rem', width: '80%' }}>
               <img src={`https://images.unsplash.com/photo-${1544005313 + i}-94ddf0286df2?w=800&q=80`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem' }}>Elena Rostova</h3>
          </a>
        ))}
      </div>
    </main>
  );
}