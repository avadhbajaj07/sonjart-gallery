export default function Events() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '1rem' }}>Events</h1>
      <p style={{ color: 'var(--color-grey-medium)', marginBottom: '4rem', fontSize: '1.25rem' }}>Kunstraum 15, Zeltweg 15, 8032 Zürich</p>
      <div style={{ maxWidth: '800px' }}>
        {[
          { date: '05.06.2026', title: 'Vernissage', time: '18–21 Uhr' },
          { date: '06.06.2026', title: 'Party', time: '15–21 Uhr' },
          { date: '11.06.2026', title: 'Open', time: '14–18 Uhr' },
          { date: '12.06.2026', title: 'Open', time: '14–18 Uhr' },
          { date: '13.06.2026', title: 'Finissage', time: '14–21 Uhr' },
          { date: '14.06.2026', title: 'Last Day', time: '12–18 Uhr' },
        ].map((event, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 0', borderBottom: '1px solid var(--color-border)' }}>
            <div>
              <span className="text-caption">{event.date}</span>
              <h3 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{event.title}</h3>
            </div>
            <span style={{ fontSize: '1.25rem' }}>{event.time}</span>
          </div>
        ))}
      </div>
    </main>
  );
}