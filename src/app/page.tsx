'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { allArtworks } from './artworks/data';
import { artistsData } from './artists/data';

// Real arts for the Hero Slider
const fadeSliderArts = [
  { 
    id: 1, 
    img: '/assets/S480.JPG', 
    fallback: '/assets/S480.JPG',
    title: 'Naked Lady in yellow room', 
    artist: 'Henk Vierveijzer', 
    year: '2026' 
  },
  { 
    id: 2, 
    img: '/assets/S030.JPG', 
    fallback: '/assets/S030.JPG',
    title: 'A lady reading', 
    artist: 'Nicole Laceur', 
    year: '2026' 
  },
  { 
    id: 3, 
    img: '/assets/S108.JPG',
    fallback: '/assets/S108.JPG',
    title: 'Wut', 
    artist: 'Beatrice Jud', 
    year: '2026' 
  }
];



export default function Home() {
  const [currentSliderArt, setCurrentSliderArt] = useState(0);

  // Fade Slider Auto-Play acts as the Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSliderArt((prev) => (prev + 1) % fadeSliderArts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* 1. HERO FADE SLIDER (Pinned Layer 1) */}
      <section id="hero-slider" style={{ height: '100vh', position: 'sticky', top: 0, overflow: 'hidden', zIndex: 1, backgroundColor: 'var(--color-black)' }}>
        <AnimatePresence mode="sync">
          {fadeSliderArts.map((art, index) => {
            if (index !== currentSliderArt) return null;
            return (
              <motion.div
                key={art.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
              >
                <img 
                  src={art.img} 
                  onError={(e) => { e.currentTarget.src = art.fallback }}
                  alt={art.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
          zIndex: 1,
        }} />

        <div className="container" style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '12vh',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <motion.div
              key={`text-${currentSliderArt}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-title" style={{ color: 'var(--color-white)', marginBottom: '0.5rem', fontSize: '2.5rem', letterSpacing: '-0.02em' }}>
                {fadeSliderArts[currentSliderArt].title}
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-light)' }}>
                {fadeSliderArts[currentSliderArt].artist}
              </p>
            </motion.div>

            {/* Pagination Controls */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
               {fadeSliderArts.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentSliderArt(idx)}
                   style={{
                     width: '50px',
                     height: '4px',
                     backgroundColor: idx === currentSliderArt ? 'var(--color-white)' : 'rgba(255,255,255,0.3)',
                     border: 'none',
                     cursor: 'pointer',
                     transition: 'background-color 0.3s'
                   }}
                 />
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING EVENTS (Normal Scroll - Covers Slider like a layer) */}
      <section id="events" className="bg-light" style={{ position: 'relative', zIndex: 3, padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
            <div>
               <span className="text-caption">01 / Next Exhibition</span>
               <h2 className="text-title" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Kunstraum 15</h2>
               <div style={{ marginBottom: '3rem', color: 'var(--color-grey-dark)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                 <img src="/assets/popup.jpeg" alt="Event Flyer pop-up gallery" style={{ width: '100%', maxWidth: '500px', display: 'block', marginBottom: '2rem', borderRadius: '4px' }} />
                 <p style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-black)' }}>5–15 June | Zürich</p>
                 <div style={{ marginBottom: '2rem' }}>
                   <p style={{ marginBottom: '1rem', fontWeight: 500 }}>You are warmly invited to visit the Kunstraum 15 Gallery.</p>
                   <p style={{ marginBottom: '1rem' }}>For two weeks, discover a curated selection of paintings from international artists—available for acquisition at special exhibition prices.</p>
                   <p style={{ fontStyle: 'italic', color: 'var(--color-grey-dark)' }}>Your home will thank you.</p>
                 </div>
                 <p style={{ fontWeight: 500 }}>Location:</p>
                 <p>Zeltweg 15</p>
                 <p>8032 Zürich, Switzerland</p>
               </div>
                <Link href="/contact" className="btn-primary">
                  RSVP / Contact Us to Reserve Your Visit
                </Link>
            </div>

             <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
               {[
                 { date: '05 June', title: 'Opening Night', subtitle: 'Vernissage', time: '18–21 Uhr', desc: 'Join us for an intimate evening with artist introductions and curated drinks.' },
                 { date: '06 June', title: 'Gallery Soirée', subtitle: 'Exhibition Party', time: '15–21 Uhr', desc: 'Experience live atmospheric music.' },
                 { date: '11 June', title: 'Public Viewing', subtitle: 'Open Gallery', time: '14–18 Uhr', desc: 'Explore the exhibition at your own pace.' },
                 { date: '12 June', title: 'Public Viewing', subtitle: 'Open Gallery', time: '14–18 Uhr', desc: 'Explore the exhibition at your own pace.' },
                 { date: '13 June', title: 'Final Celebration', subtitle: 'Finissage', time: '14–21 Uhr', desc: 'Closing celebration and final acquisition.' },
                 { date: '14 June', title: 'Farewell', subtitle: 'Last Day', time: '12–18 Uhr', desc: 'Final public walk-ins.' },
               ].map((event, i) => (
                 <div key={i} className="event-card" style={{ 
                   padding: '3rem 2rem', 
                   backgroundColor: '#fcfcfc',
                   border: '1px solid #f0f0f0',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   textAlign: 'center',
                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                 }}>
                   <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-grey-medium)', marginBottom: '1.25rem', fontWeight: 500 }}>
                     {event.date} &middot; {event.time}
                   </span>
                   <h3 style={{ fontSize: '1.4rem', fontWeight: 300, color: 'var(--color-black)', marginBottom: '0.5rem' }}>
                     {event.title}
                   </h3>
                   <span style={{ fontSize: '0.875rem', fontStyle: 'italic', opacity: 0.7, color: 'var(--color-grey-dark)', marginBottom: '1.25rem' }}>{event.subtitle}</span>
                   <div style={{ width: '25px', height: '1px', backgroundColor: '#ddd', marginBottom: '1.25rem' }}></div>
                   <p style={{ fontSize: '0.85rem', color: 'var(--color-grey-dark)', lineHeight: 1.6, opacity: 0.9 }}>
                     {event.desc}
                   </p>
                 </div>
               ))}
             </div>
            </div>
          </div>
        </section>

      {/* 4. FEATURED COLLECTION (Normal scroll - Added demo arts) */}
      <section style={{ position: 'relative', zIndex: 3, padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>02 / Curated Art</span>
              <h2 className="text-title" style={{ marginTop: '1rem', color: 'var(--color-white)' }}>Art Collections</h2>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href="/artworks" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem', color: 'var(--color-white)' }}>
                View All <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
          }}>
            {allArtworks.slice(0, 16).map((art) => (
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
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                       <span style={{ fontSize: '1rem', color: 'var(--color-white)', fontWeight: 500 }}>CHF {art.discountPrice?.toLocaleString()}</span>
                       <span style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)', textDecoration: 'line-through' }}>CHF {art.originalPrice?.toLocaleString()}</span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SONJ */}
      <section className="bg-light" style={{ position: 'relative', zIndex: 3, padding: 'var(--spacing-xl) 0', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
            
            <div style={{ order: 2 }}>
              <span className="text-caption" style={{ marginBottom: '2rem', display: 'block' }}>03 / The Visionary</span>
              <h2 className="text-title" style={{ marginBottom: '2rem', color: 'var(--color-black)' }}>About Sonja</h2>
              
              <div style={{ fontSize: '1.125rem', color: 'var(--color-grey-dark)', marginBottom: '3rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Sonja Schlagel, founder of SonjART Galerie, was born in Alkmaar, the Netherlands, and has been based in Switzerland since 1990.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  With a background in international pharmaceutical sales and management, she later chose to follow a more personal path—bringing her lifelong passion for art into her professional life.
                </p>
                <p style={{ marginBottom: '2.5rem' }}>
                  Today, she is fully dedicated to helping people discover artworks that add depth, emotion, and individuality to their homes. With a refined eye and years of experience, Sonja believes that the right piece of art doesn’t just decorate a space—it transforms it.
                </p>
                
                <div style={{ 
                  paddingLeft: '2rem', 
                  borderLeft: '2px solid var(--color-black)', 
                  marginTop: '3rem' 
                }}>
                  <p style={{ 
                    fontSize: '1.5rem', 
                    fontStyle: 'italic', 
                    color: 'var(--color-black)', 
                    lineHeight: 1.4,
                    marginBottom: '1rem',
                    fontWeight: 300
                  }}>
                    &quot;Furniture fills a house, but art gives it a soul.&quot;
                  </p>
                  <span style={{ 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    fontSize: '0.875rem', 
                    fontWeight: 600,
                    color: 'var(--color-black)'
                  }}>
                    — Sonja Schlagel
                  </span>
                </div>
              </div>
              
              <Link href="/about" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Read Full Biography
              </Link>
            </div>

            <div style={{ order: 1, position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <img 
                src="/assets/sonja.jpeg"
                alt="Portrait of Sonja, the gallery owner"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Sonja Schlagel
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ARTISTS */}
      <section style={{ position: 'relative', zIndex: 3, padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>04 / The Creators</span>
              <h2 className="text-title" style={{ marginTop: '1rem', color: 'var(--color-white)' }}>Gallery Artists</h2>
            </div>
            <Link href="/artists" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem', color: 'var(--color-white)' }}>
              View All Artists <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem' }}>
            {artistsData.slice(0, 12).map((artist) => (
              <Link key={artist.id} href={`/artists/${artist.id}`} style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ 
                  aspectRatio: '1/1', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  marginBottom: '1.5rem',
                  padding: '0.5rem',
                  border: '1px solid var(--color-border)',
                  width: '80%',
                  margin: '0 auto 1.5rem',
                }}>
                  <img 
                    src={artist.img} 
                    alt={artist.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter var(--transition-slow)', borderRadius: '50%' }}
                    onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                    onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                  />
                </div>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--color-white)' }}>{artist.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section style={{ 
        position: 'relative', 
        zIndex: 3,
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden',
        backgroundColor: 'var(--color-black)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/art%20gallery1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          zIndex: 1
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="text-title" style={{ marginBottom: '1.5rem' }}>Acquire a Masterpiece</h2>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-grey-light)', opacity: 0.9, marginBottom: '3rem' }}>
            Every collection tells a personal story. Speak with our curation team to acquire new fine art and begin your journey into contemporary excellence.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}>
            Approach for Curation
          </Link>
        </div>
      </section>

    </main>
  );
}
