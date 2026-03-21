export default function About() {
  return (
    <main style={{ padding: '12rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-title" style={{ marginBottom: '4rem' }}>About Sonj</h1>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
          <img src="/assets/sonja.jpeg" alt="Sonja Schlagel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
        </div>
        <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-white)', opacity: 0.9 }}>
          <p style={{ marginBottom: '2rem' }}>Founded in Zürich by Sonja Schlagel, SONJ ART is a sanctuary for contemporary narratives. Our gallery space is designed to remove the noise of the outside world, allowing art to speak in its purest form.</p>
          <p style={{ marginBottom: '2rem' }}>We represent a highly curated selection of international and Swiss contemporary artists. Our philosophy is rooted in emotional resonance, minimalist aesthetics, and architectural harmony.</p>
        </div>
      </div>
    </main>
  );
}