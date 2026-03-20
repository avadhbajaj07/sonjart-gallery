'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Grid as GridIcon, List as SliderIcon } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1577083165039-3d12ebd8ff46?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518998053401-b41398282367?auto=format&fit=crop&q=80'
];

const featuredArtworks = [
  { id: 1, img: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80', title: 'The Silence', artist: 'Elena Rostova', year: '2025' },
  { id: 2, img: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80', title: 'Urban Geometry', artist: 'Markus Weber', year: '2024' },
  { id: 3, img: 'https://images.unsplash.com/photo-1561214115-f2f11462ce40?w=800&q=80', title: 'Fluid Forms', artist: 'Sarah Chen', year: '2026' },
  { id: 4, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', title: 'Absence of Color', artist: 'David Zimmer', year: '2023' },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [artView, setArtView] = useState<'grid' | 'slider'>('grid');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* 1. HERO SECTION (Black) */}
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
              <Link href="#events" className="btn-primary">
                View Upcoming Event
              </Link>
              <Link href="/artworks" className="btn-secondary">
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. UPCOMING EVENTS (White Background / Dark Text) */}
      <section id="events" className="bg-light" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
               <span className="text-caption">01 / Next Exhibition</span>
               <h2 className="text-title" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Kunstraum 15</h2>
               <div style={{ marginBottom: '3rem', color: 'var(--color-grey-dark)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                 <p style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-black)' }}>An Exploration of Contemporary Silence</p>
                 <p style={{ marginBottom: '2rem' }}>
                   Join us for our upcoming exclusive exhibition focusing on minimalist geometry and modern interpretations of absence. Curated by Sonja Schlagel, this immersive experience features the works of four international contemporary artists.
                 </p>
                 <p style={{ fontWeight: 500 }}>Location:</p>
                 <p>Zeltweg 15</p>
                 <p>8032 Zürich, Switzerland</p>
               </div>
               <Link href="/contact" className="btn-primary">
                 RSVP / Contact Us
               </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { date: '05.06.2026', title: 'Vernissage', time: '18–21 Uhr', desc: 'Opening night with artist introductions and curated drinks.' },
                { date: '06.06.2026', title: 'Exhibition Party', time: '15–21 Uhr', desc: 'Live atmospheric music alongside the gallery pieces.' },
                { date: '11.06.2026', title: 'Open Gallery', time: '14–18 Uhr', desc: 'Public viewing hours.' },
                { date: '12.06.2026', title: 'Open Gallery', time: '14–18 Uhr', desc: 'Public viewing hours.' },
                { date: '13.06.2026', title: 'Finissage', time: '14–21 Uhr', desc: 'Closing celebration and final acquisition opportunities.' },
                { date: '14.06.2026', title: 'Last Day', time: '12–18 Uhr', desc: 'Final public walk-ins.' },
              ].map((event, i) => (
                <div key={i} className="border-b" style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--color-border-light)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ color: 'var(--color-grey-dark)', fontSize: '0.875rem', marginBottom: '0.25rem', display: 'block', fontWeight: 500 }}>
                        {event.date}
                      </span>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-black)' }}>{event.title}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-grey-dark)', fontWeight: 500 }}>{event.time}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-grey-dark)', marginTop: '0.25rem' }}>{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTION (Black Background) */}
      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>02 / Curated</span>
              <h2 className="text-title" style={{ marginTop: '1rem', color: 'var(--color-white)' }}>Featured Art</h2>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {/* Toggle Controls */}
              <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'var(--color-grey-dark)', padding: '0.25rem', borderRadius: '4px' }}>
                <button 
                  onClick={() => setArtView('grid')}
                  style={{ 
                    padding: '0.5rem', 
                    backgroundColor: artView === 'grid' ? 'var(--color-white)' : 'transparent', 
                    color: artView === 'grid' ? 'var(--color-black)' : 'var(--color-white)',
                    border: 'none', borderRadius: '2px', cursor: 'pointer', display: 'flex', alignItems: 'center'
                  }}
                  title="Grid View"
                >
                  <GridIcon size={18} />
                </button>
                <button 
                  onClick={() => setArtView('slider')}
                  style={{ 
                    padding: '0.5rem', 
                    backgroundColor: artView === 'slider' ? 'var(--color-white)' : 'transparent', 
                    color: artView === 'slider' ? 'var(--color-black)' : 'var(--color-white)',
                    border: 'none', borderRadius: '2px', cursor: 'pointer', display: 'flex', alignItems: 'center'
                  }}
                  title="Slider View"
                >
                  <SliderIcon size={18} />
                </button>
              </div>

              <Link href="/artworks" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem', color: 'var(--color-white)' }}>
                View All <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* VIEW: GRID OR SLIDER */}
          {artView === 'grid' ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {featuredArtworks.map((art) => (
                <Link key={art.id} href={`/artworks/${art.id}`} style={{ display: 'block' }}>
                  <div style={{ overflow: 'hidden', aspectRatio: '4/5', marginBottom: '1.5rem', position: 'relative' }}>
                    <img 
                      src={art.img} 
                      alt={art.title}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', color: 'var(--color-white)' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{art.title}</h3>
                      <p style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.artist}</p>
                    </div>
                    <span style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.year}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{
                display: 'flex',
                gap: '2rem',
                overflowX: 'auto',
                paddingBottom: '2rem',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none',  // IE and Edge
              }}
              className="slider-hide-scroll"
            >
              <style dangerouslySetInnerHTML={{__html: `
                .slider-hide-scroll::-webkit-scrollbar { display: none; }
              `}} />
              
              {featuredArtworks.map((art) => (
                <Link key={art.id} href={`/artworks/${art.id}`} style={{ display: 'block', minWidth: '400px', scrollSnapAlign: 'start' }}>
                  <div style={{ overflow: 'hidden', aspectRatio: '4/5', marginBottom: '1.5rem', position: 'relative', width: '400px' }}>
                    <img 
                      src={art.img} 
                      alt={art.title}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', color: 'var(--color-white)' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{art.title}</h3>
                      <p style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.artist}</p>
                    </div>
                    <span style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.year}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. ABOUT SONJ (White Background / Dark Text) */}
      <section className="bg-light" style={{ padding: 'var(--spacing-xl) 0', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            
            <div style={{ order: 2 }}>
              <span className="text-caption" style={{ marginBottom: '2rem', display: 'block' }}>03 / The Visionary</span>
              <h2 className="text-title" style={{ marginBottom: '2rem', color: 'var(--color-black)' }}>About Sonja</h2>
              
              <div style={{ fontSize: '1.125rem', color: 'var(--color-grey-dark)', marginBottom: '3rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Sonj is the driving force and creative visionary behind SONJ ART gallery. With over a decade of experience navigating the European contemporary art scenes in Paris, Berlin, and now Zürich, she established this space to break away from sterile, traditional exhibition environments.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Her philosophy is profoundly simple: art must be felt before it is understood. By carefully curating every exhibition from the lighting design down to the thematic narrative, she ensures that collectors and casual visitors alike experience an emotional connection with the pieces on display.
                </p>
                <p>
                  "The gallery is not just a room with white walls; it is a canvas in its own right—a sanctuary designed to protect the integrity of the narratives our artists share with the world." 
                  <br /><span style={{ fontStyle: 'italic', marginTop: '1rem', display: 'inline-block' }}>— Sonja Schlagel</span>
                </p>
              </div>
              
              <Link href="/about" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Read Full Biography
              </Link>
            </div>

            <div style={{ order: 1, position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Portrait of Sonja, the gallery owner"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Sonja Schlagel
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
