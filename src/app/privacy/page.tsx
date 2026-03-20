export default function Privacy() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh', maxWidth: '800px' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
      <div style={{ color: 'var(--color-grey-medium)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1.5rem' }}>This privacy policy explains how SONJ ART handles your personal data. We are committed to protecting your privacy and complying with GDPR and Swiss Data Protection laws.</p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Data Collection</h2>
        <p style={{ marginBottom: '1.5rem' }}>We collect personal data that you provide to us via contact forms, inquiries, and email (e.g., name, email address). We use this data solely to communicate with you and process your art inquiries.</p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Cookies</h2>
        <p style={{ marginBottom: '1.5rem' }}>We use essential cookies to ensure the website functions securely and optimally. Non-essential cookies for analytics may be used with your consent via our Cookie Banner.</p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Contact Data Handling</h2>
        <p>Your data is securely stored and never shared with third parties without your explicit consent. You have the right to request deletion of your data at any time by contacting info@sonjart.ch.</p>
      </div>
    </main>
  );
}