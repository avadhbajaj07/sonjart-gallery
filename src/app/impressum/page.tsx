export default function Impressum() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh', maxWidth: '800px' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '2rem' }}>Impressum</h1>
      <div style={{ color: 'var(--color-grey-medium)', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Owner & Operator</h2>
        <p style={{ marginBottom: '1.5rem' }}>Sonja Schlagel<br/>SONJ ART<br/>Zürich, Switzerland</p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Contact</h2>
        <p style={{ marginBottom: '1.5rem' }}>Email: <a href="mailto:info@sonjart.ch" style={{ textDecoration: 'underline' }}>info@sonjart.ch</a><br/>Website: <a href="https://sonjart.ch" style={{ textDecoration: 'underline' }}>sonjart.ch</a></p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Legal Responsibility</h2>
        <p>The content of this website is created with the utmost care. However, we assume no liability for the accuracy, completeness, or timeliness of the content. We are not responsible for the content of external links.</p>
      </div>
    </main>
  );
}