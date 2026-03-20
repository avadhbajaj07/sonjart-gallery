export default function Terms() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh', maxWidth: '800px' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
      <div style={{ color: 'var(--color-grey-medium)', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Website Usage</h2>
        <p style={{ marginBottom: '1.5rem' }}>By using this website, you agree to these Terms & Conditions. All content, imagery, and design elements are the property of SONJ ART or our represented artists and are protected by copyright law.</p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Inquiry Disclaimer</h2>
        <p style={{ marginBottom: '1.5rem' }}>Submitting an interest form or inquiry via our website constitutes a non-binding purchase interest. It does not establish a contract of sale. Availability and pricing are subject to confirmation by the gallery.</p>
      </div>
    </main>
  );
}