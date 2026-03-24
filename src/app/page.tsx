'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    img: '/assets/S087.JPG', 
    fallback: '/assets/S087.JPG',
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

const featuredArtworksGrid = [
  { id: 11, img: '/assets/S087.JPG', title: 'A lady reading', artist: 'Nicole Laceur', year: '2026', originalPrice: 3900, discount: 70, discountPrice: 1170 },
  { id: 12, img: '/assets/2801.jpg', title: 'Untitled (yellow ladies)', artist: 'Corneille', year: '1991', originalPrice: 1100, discount: 50, discountPrice: 550 },
  { id: 13, img: '/assets/S098.JPG', title: 'Longing', artist: 'Nicole Janssen', year: '2026', originalPrice: 4200, discount: 80, discountPrice: 840 },
  { id: 14, img: '/assets/S108.JPG', title: 'Wut', artist: 'Beatrice Jud', year: '2026', originalPrice: 5500, discount: 50, discountPrice: 2750 },
  { id: 15, img: '/assets/S026.JPG', title: 'Autumn in Paris', artist: 'Cees Müller', year: '2026', originalPrice: 5900, discount: 60, discountPrice: 2360 },
  { id: 16, img: '/assets/Toro Small I.JPG', title: 'Toro 2', artist: 'F. Escobar', year: '2026', originalPrice: 2000, discount: 70, discountPrice: 600 },
  { id: 17, img: '/assets/4121.JPG', title: 'Real life 4', artist: 'F. Escobar', year: '2026', originalPrice: 5500, discount: 80, discountPrice: 1100 },
  { id: 18, img: '/assets/S480.JPG', title: 'Naked Lady in yellow room', artist: 'Henk Vierveijzer', year: '2026', originalPrice: 5500, discount: 50, discountPrice: 2750 },
  { id: 19, img: '/assets/S419.JPG', title: 'Forgotten', artist: 'Nicole Laceur', year: '2026', originalPrice: 4500, discount: 70, discountPrice: 1350 },
  { id: 20, img: '/assets/S099.JPG', title: 'Red dream', artist: 'Nicole Janssen', year: '2026', originalPrice: 4500, discount: 70, discountPrice: 1350 },
  { id: 21, img: '/assets/S008.JPG', title: 'Flowercomposition VI', artist: 'Gyula Issak', year: '2026', originalPrice: 8300, discount: 70, discountPrice: 2490 },
  { id: 22, img: '/assets/S014.JPG', title: 'My Apple', artist: 'Jean Lefort', year: '2026', originalPrice: 2100, discount: 70, discountPrice: 630 },
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
              <h1 className="text-title-huge" style={{ color: 'var(--color-white)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                SONJ ART
              </h1>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)', display: 'block', marginBottom: '1.5rem', fontSize: '1rem' }}>
                Original artworks by international artists, spanning styles from realism to expressionism. &middot; Exclusive Collection
              </span>
              <h2 className="text-title" style={{ color: 'var(--color-white)', marginBottom: '0.5rem', fontSize: '2rem' }}>
                {fadeSliderArts[currentSliderArt].title}
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-light)' }}>
                {fadeSliderArts[currentSliderArt].artist}, {fadeSliderArts[currentSliderArt].year}
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
               <span className="text-caption">02 / Next Exhibition</span>
               <h2 className="text-title" style={{ marginTop: '1rem', marginBottom: '2rem' }}>Kunstraum 15</h2>
               <div style={{ marginBottom: '3rem', color: 'var(--color-grey-dark)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                 <img src="/assets/sonja1.jpeg" alt="Event Flyer pop-up gallery" style={{ width: '100%', maxWidth: '500px', display: 'block', marginBottom: '2rem', borderRadius: '4px' }} />
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

      {/* 4. FEATURED COLLECTION (Normal scroll - Added demo arts) */}
      <section style={{ position: 'relative', zIndex: 3, padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>03 / Curated Art</span>
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
            {featuredArtworksGrid.map((art) => (
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
                       <span style={{ fontSize: '1rem', color: 'var(--color-white)', fontWeight: 500 }}>CHF {(art as any).discountPrice?.toLocaleString()}</span>
                       <span style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)', textDecoration: 'line-through' }}>CHF {(art as any).originalPrice?.toLocaleString()}</span>
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-grey-medium)', fontSize: '0.875rem' }}>{art.year}</span>
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
              <span className="text-caption" style={{ marginBottom: '2rem', display: 'block' }}>04 / The Visionary</span>
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
              <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>05 / The Creators</span>
              <h2 className="text-title" style={{ marginTop: '1rem', color: 'var(--color-white)' }}>Gallery Artists</h2>
            </div>
            <Link href="/artists" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem', color: 'var(--color-white)' }}>
              View All Artists <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem' }}>
            {[
              { id: 'elso-schiavo', name: 'Elso Schiavo', img: '/assets/Elso Schiavo.jpg' },
              { id: 'beatrice-jud', name: 'Beatrice Jud', img: '/assets/Beatrice Jud.jpeg' },
              { id: 'nicole-laceur', name: 'Nicole Laceur', img: '/assets/Nicole Laceur.jpeg' },
              { id: 'nicole-janssen', name: 'Nicole Janssen', img: '/assets/Nicole Janssen.jpeg' },
              { id: 'escobar', name: 'F. Escobar', img: '/assets/Francisco Escobar.JPG' },
              { id: 'henk-vierveijzer', name: 'Henk Vierveijzer', img: '/assets/Henk Vierveijzer.JPG' },
              { id: 'albert-chalet', name: 'Albert Chalet', img: '/assets/Albert Chalet.jpg' },
              { id: 'richard-van-der-pol', name: 'R. van der Pol', img: '/assets/Richard van de Pol.jpeg' },
              { id: 'jean-lefort', name: 'Jean Lefort', img: '/assets/Jean Lefort.jpg' },
              { id: 'cees-muller', name: 'Cees Müller', img: '/assets/Cees Muller.jpg' },
              { id: 'gyula-issak', name: 'Gyula Issak', img: '/assets/Balazs Wanyi.jpeg' },
              { id: 'corneille', name: 'Corneille', img: '/assets/Corneille.jpg' }
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
