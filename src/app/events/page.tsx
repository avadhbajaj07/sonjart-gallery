'use client';
import { motion } from 'framer-motion';

export default function Events() {
  const eventSchedule = [
    { date: '05 June', title: 'Opening Night', subtitle: 'Vernissage', time: '18–21 Uhr', desc: 'Join us for an intimate evening with artist introductions and curated drinks.' },
    { date: '06 June', title: '20 Years of sonjART', subtitle: 'and 60 years of Sonja', time: '14–21 Uhr', desc: 'Join us for a special celebration marking two milestones.' },
    { date: '11 June', title: 'Public Viewing', subtitle: 'Open Gallery', time: '14–18 Uhr', desc: 'Explore the exhibition at your own pace.' },
    { date: '12 June', title: 'Public Viewing', subtitle: 'Open Gallery', time: '14–18 Uhr', desc: 'Explore the exhibition at your own pace.' },
    { date: '13 June', title: 'Final Celebration', subtitle: 'Finissage', time: '14–21 Uhr', desc: 'Closing celebration and final acquisition opportunities.' },
    { date: '14 June', title: 'Farewell', subtitle: 'Last Day', time: '12–18 Uhr', desc: 'Final public walk-ins.' },
    { date: '15 June', title: 'Moving Day', subtitle: 'Pick Up the Paintings', time: '14–18 Uhr', desc: 'Collection of purchased artworks.' },
  ];

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '10rem', color: '#000000' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Header Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '6rem', marginBottom: '8rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', color: '#666', display: 'block', marginBottom: '1.5rem' }}>Exhibition 2026</span>
            <h1 className="text-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, marginBottom: '2rem', color: '#000' }}>
              Two-week<br />Pop-Up Gallery
            </h1>
            <div style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '2.5rem', lineHeight: 1.6 }}>
              <p style={{ marginBottom: '0.5rem' }}>5–15 June</p>
              <p style={{ color: '#666' }}>Kunstraum 15, Zeltweg 15, 8032 Zürich</p>
            </div>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#333', maxWidth: '500px', fontStyle: 'italic' }}>
              Featuring original artworks at exceptional prices due to relocation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)', borderRadius: '4px', overflow: 'hidden' }}>
              <img src="/assets/popup.jpeg" alt="Exhibition Poster" style={{ width: '100%', display: 'block' }} />
            </div>
            {/* Decorative element */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderTop: '1px solid #eee', borderRight: '1px solid #eee', zIndex: -1 }}></div>
          </motion.div>
        </div>

        {/* Schedule Grid */}
        <section style={{ paddingBottom: '8rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '4rem', letterSpacing: '0.05em' }}
          >
            Event Schedule
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {eventSchedule.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  padding: '3rem 2rem', 
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #eeeeee',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {event.date} &middot; {event.time}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#000', marginBottom: '0.5rem' }}>
                  {event.title}
                </h3>
                <span style={{ fontSize: '0.875rem', fontStyle: 'italic', opacity: 0.7, color: '#444', marginBottom: '1.5rem' }}>{event.subtitle}</span>
                <div style={{ width: '30px', height: '1px', backgroundColor: '#ddd', marginBottom: '1.5rem' }}></div>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.8 }}>
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}