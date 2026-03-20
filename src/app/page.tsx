'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Menu } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1577083165039-3d12ebd8ff46?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518998053401-b41398282367?auto=format&fit=crop&q=80'
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${heroImages[currentHero]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
          zIndex: 10,
        }} />

        <div className="container" style={{
          position: 'relative',
          zIndex: 20,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '10vh',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-title-huge" style={{ marginBottom: '1rem' }}>SONJ ART</h1>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '3rem', opacity: 0.9 }}>
              Contemporary Art Gallery
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/artworks" className="btn-primary">
                Explore Collection
              </Link>
              <Link href="/events" className="btn-secondary">
                View Exhibition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="text-caption">01 / Curated</span>
              <h2 className="text-title" style={{ marginTop: '1rem' }}>Featured Collection</h2>
            </div>
            <Link href="/artworks" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {[
              { id: 1, img: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80', title: 'The Silence', artist: 'Elena Rostova', year: '2025' },
              { id: 2, img: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80', title: 'Urban Geometry', artist: 'Markus Weber', year: '2024' },
              { id: 3, img: 'https://images.unsplash.com/photo-1561214115-f2f11462ce40?w=800&q=80', title: 'Fluid Forms', artist: 'Sarah Chen', year: '2026' },
            ].map((art) => (
              <Link key={art.id} href={`/artworks/${art.id}`} style={{ display: 'block' }}>
                <div style={{ overflow: 'hidden', aspectRatio: '4/5', marginBottom: '1.5rem', position: 'relative' }}>
                  <img 
                    src={art.img} 
                    alt={art.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{art.title}</h3>
                    <p style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.artist}</p>
                  </div>
                  <span style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SONJ INTRO */}
      <section style={{ padding: 'var(--spacing-lg) 0', backgroundColor: 'var(--color-grey-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" 
                  alt="Gallery Space"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="text-caption" style={{ marginBottom: '2rem' }}>02 / Vision</span>
                <h2 className="text-title" style={{ marginBottom: '2rem' }}>Elevating contemporary narratives.</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--color-grey-medium)', marginBottom: '3rem', maxWidth: '40ch', lineHeight: 1.6 }}>
                  SONJ ART is a premier contemporary gallery based in Zürich, dedicated to showcasing emotional, profound, and visually striking narratives from tomorrow&apos;s leading artists.
                </p>
                <Link href="/about" className="btn-secondary" style={{ alignSelf: 'flex-start' }}>
                  About Sonj
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
               <span className="text-caption">03 / Exhibitions</span>
               <h2 className="text-title" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Upcoming Events</h2>
               <div style={{ marginBottom: '3rem', color: 'var(--color-grey-medium)' }}>
                 <p style={{ fontWeight: 500, color: 'var(--color-white)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Kunstraum 15</p>
                 <p>Zeltweg 15</p>
                 <p>8032 Zürich</p>
               </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { date: '05.06.2026', title: 'Vernissage', time: '18–21 Uhr' },
                { date: '06.06.2026', title: 'Party', time: '15–21 Uhr' },
                { date: '11.06.2026', title: 'Open', time: '14–18 Uhr' },
                { date: '12.06.2026', title: 'Open', time: '14–18 Uhr' },
                { date: '13.06.2026', title: 'Finissage', time: '14–21 Uhr' },
                { date: '14.06.2026', title: 'Last Day', time: '12–18 Uhr' },
              ].map((event, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingBottom: '2rem',
                  borderBottom: '1px solid var(--color-border)',
                }}>
                  <div>
                    <span style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem', marginBottom: '0.25rem', display: 'block' }}>
                      {event.date}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400 }}>{event.title}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-white)', opacity: 0.8 }}>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section style={{ padding: '0 0 var(--spacing-xl)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="text-caption">04 / Artists</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { id: 'elena', name: 'Elena Rostova', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80' },
              { id: 'markus', name: 'Markus Weber', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80' },
              { id: 'sarah', name: 'Sarah Chen', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80' },
              { id: 'david', name: 'David Zimmer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
            ].map((artist) => (
              <Link key={artist.id} href={`/artists/${artist.id}`} style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ 
                  aspectRatio: '1/1', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  marginBottom: '1.5rem',
                  width: '80%',
                  margin: '0 auto 1.5rem',
                }}>
                  <img 
                    src={artist.img} 
                    alt={artist.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter var(--transition-slow)' }}
                    onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                    onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                  />
                </div>
                <h3 style={{ fontSize: '1.125rem' }}>{artist.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
