import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-black)' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', borderRight: '1px solid var(--color-border)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: 500, letterSpacing: '0.1em' }}>sonjART Admin</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
          <p className="text-caption" style={{ marginBottom: '0.5rem' }}>Management</p>
          <a href="#" style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--color-grey-dark)', borderRadius: '4px' }}>Dashboard Overview</a>
          <a href="#" style={{ padding: '0.75rem 1rem', color: 'var(--color-grey-medium)', transition: 'color 0.2s' }}>Artworks</a>
          <a href="#" style={{ padding: '0.75rem 1rem', color: 'var(--color-grey-medium)', transition: 'color 0.2s' }}>Artists</a>
          <a href="#" style={{ padding: '0.75rem 1rem', color: 'var(--color-grey-medium)', transition: 'color 0.2s' }}>Events</a>
          <a href="#" style={{ padding: '0.75rem 1rem', color: 'var(--color-grey-medium)', transition: 'color 0.2s' }}>Inquiries</a>
        </nav>
        
        <Link href="/" style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>&larr; Back to Website</Link>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '4rem' }}>
        <h1 className="text-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Dashboard Overview</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { label: 'Total Artworks', value: '124' },
            { label: 'Featured Artists', value: '18' },
            { label: 'Upcoming Events', value: '3' },
            { label: 'New Inquiries', value: '12', highlight: true }
          ].map((stat, i) => (
            <div key={i} style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: stat.highlight ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
              <p className="text-caption" style={{ marginBottom: '0.5rem' }}>{stat.label}</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 300 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 400 }}>Recent Inquiries</h2>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
            {[
              { name: 'Michael Thorne', artwork: 'The Silence', date: 'Today, 10:42 AM' },
              { name: 'Sarah Dubois', artwork: 'Fluid Forms', date: 'Yesterday' },
              { name: 'James Clear', artwork: 'Urban Geometry', date: 'Oct 12, 2026' }
            ].map((inq, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 2rem', borderBottom: i !== 2 ? '1px solid var(--color-border)' : 'none' }}>
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{inq.name}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-grey-medium)' }}>Inquiry about: {inq.artwork}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-grey-medium)' }}>{inq.date}</p>
                  <button style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', marginTop: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>View Details</button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
