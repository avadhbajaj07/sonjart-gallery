export default function Contact() {
  return (
    <main style={{ padding: '12rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <h1 className="text-title" style={{ marginBottom: '2rem' }}>Contact</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-grey-medium)' }}>
            We welcome inquiries regarding the collection, private viewings, and artist representation.
          </p>
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>Email</p>
            <a href="mailto:info@sonjart.ch" style={{ fontSize: '1.5rem' }}>info@sonjart.ch</a>
          </div>
          <div>
            <p style={{ marginBottom: '0.5rem' }}>Location</p>
            <p style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Kunstraum 15</p>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-medium)' }}>Zeltweg 15<br/>8032 Zürich<br/>Switzerland</p>
          </div>
        </div>
        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <input required type="text" placeholder="Name" style={{ width: '100%', padding: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', color: 'white', outline: 'none', fontSize: '1rem' }} />
            <input required type="email" placeholder="Email" style={{ width: '100%', padding: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', color: 'white', outline: 'none', fontSize: '1rem' }} />
            <textarea required placeholder="Message" rows={5} style={{ width: '100%', padding: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', color: 'white', outline: 'none', fontSize: '1rem', resize: 'vertical' }} />
            <button className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}