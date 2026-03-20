const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: 'src/app/artworks/page.tsx',
    content: `export default function Artworks() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '2rem' }}>Art Collection</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <a key={i} href={\`/artworks/\${i}\`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-grey-dark)', marginBottom: '1rem', overflow: 'hidden' }}>
               <img src={\`https://images.unsplash.com/photo-\${1543857778 + i}-c4a1a3e0b2eb?w=800&q=80\`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>Masterpiece {i}</h3>
            <p className="text-caption">Artist {i} • 2026</p>
          </a>
        ))}
      </div>
    </main>
  );
}`
  },
  {
    path: 'src/app/artworks/[id]/page.tsx',
    content: `'use client';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import InterestFormModal from '@/components/InterestFormModal';

export default function ArtworkDetail() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container">
        <Link href="/artworks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <div style={{ aspectRatio: '4/5', width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=1600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="text-title" style={{ marginBottom: '0.5rem' }}>The Silence</h1>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-grey-medium)', marginBottom: '0.5rem' }}><Link href="/artists/elena" style={{ textDecoration: 'underline' }}>Elena Rostova</Link></h2>
            <p className="text-caption" style={{ marginBottom: '3rem' }}>Oil on Canvas • 2025 • 120 x 180 cm</p>
            <p style={{ lineHeight: 1.8, marginBottom: '3rem', color: 'var(--color-grey-medium)' }}>
              \"The Silence\" explores the profound emptiness following intense emotional experiences. Rostova uses monochromatic depth to invite viewers into a meditative state, challenging the chaotic noise of contemporary life.
            </p>
            <button className="btn-primary" onClick={() => setModalOpen(true)}>Show Interest</button>
          </div>
        </div>
      </div>
      <InterestFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} artworkTitle="The Silence" artistName="Elena Rostova" />
    </main>
  );
}`
  },
  {
    path: 'src/app/artists/page.tsx',
    content: `export default function Artists() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '4rem' }}>Artists</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
        {[1, 2, 3, 4].map(i => (
          <a key={i} href={\`/artists/elena\`} style={{ display: 'block', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', margin: '0 auto 1.5rem', width: '80%' }}>
               <img src={\`https://images.unsplash.com/photo-\${1544005313 + i}-94ddf0286df2?w=800&q=80\`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem' }}>Elena Rostova</h3>
          </a>
        ))}
      </div>
    </main>
  );
}`
  },
  {
    path: 'src/app/artists/[id]/page.tsx',
    content: `import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function ArtistDetail() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container">
        <Link href="/artists" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Artists
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', width: '200px', margin: '0 auto 3rem' }}>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
            </div>
            <h1 className="text-title" style={{ marginBottom: '1.5rem' }}>Elena Rostova</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-grey-medium)', marginBottom: '4rem' }}>
              Born in 1988, Elena Rostova's work centers on the geometry of silence and emotional resonance in liminal spaces.
            </p>
          </div>
        </div>
        <h2 className="text-title" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Artworks by Elena</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
           <a href={\`/artworks/1\`} style={{ display: 'block' }}>
            <div style={{ aspectRatio: '4/5', backgroundColor: 'var(--color-grey-dark)', marginBottom: '1rem', overflow: 'hidden' }}>
               <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>The Silence</h3>
            <p className="text-caption">2025</p>
          </a>
        </div>
      </div>
    </main>
  );
}`
  },
  {
    path: 'src/app/about/page.tsx',
    content: `export default function About() {
  return (
    <main style={{ padding: '12rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-title" style={{ marginBottom: '4rem' }}>About Sonj</h1>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-white)', opacity: 0.9 }}>
          <p style={{ marginBottom: '2rem' }}>Founded in Zürich by Sonja Schlagel, SONJ ART is a sanctuary for contemporary narratives. Our gallery space is designed to remove the noise of the outside world, allowing art to speak in its purest form.</p>
          <p style={{ marginBottom: '2rem' }}>We represent a highly curated selection of international and Swiss contemporary artists. Our philosophy is rooted in emotional resonance, minimalist aesthetics, and architectural harmony.</p>
        </div>
      </div>
    </main>
  );
}`
  },
  {
    path: 'src/app/events/page.tsx',
    content: `export default function Events() {
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
}`
  },
  {
    path: 'src/app/contact/page.tsx',
    content: `export default function Contact() {
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
}`
  },
  {
    path: 'src/app/privacy/page.tsx',
    content: `export default function Privacy() {
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
}`
  },
  {
    path: 'src/app/impressum/page.tsx',
    content: `export default function Impressum() {
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
}`
  },
  {
    path: 'src/app/terms/page.tsx',
    content: `export default function Terms() {
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh', maxWidth: '800px' }} className="container fade-in">
      <h1 className="text-title" style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
      <div style={{ color: 'var(--color-grey-medium)', lineHeight: 1.8 }}>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Website Usage</h2>
        <p style={{ marginBottom: '1.5rem' }}>By using this website, you agree to these Terms & Conditions. All content, imagery, and design elements are the property of SONJ ART or our represented artists and are protected by copyright law.</p>
        <h2 style={{ color: 'var(--color-white)', marginTop: '2rem', marginBottom: '1rem' }}>Inquiry Disclaimer</h2>
        <p style={{ marginBottom: '1.5rem' }}>Submitting an interest form or inquiry via our website constitutes a non-binding purchase interest. It does not establish a contract of sale. Availability and pricing are subject to confirmation by the gallery.</p>
      </div>
    </main>
  );
}`
  },
  {
    path: 'src/components/CookieBanner.tsx',
    content: `'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            maxWidth: '600px',
            backgroundColor: 'var(--color-grey-dark)',
            padding: '1.5rem',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            border: '1px solid var(--color-border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--color-white)' }}>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
            <button onClick={() => handleConsent(false)} style={{ background: 'transparent', border: '1px solid var(--color-border)', color: 'white', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.875rem' }}>Reject</button>
            <button onClick={() => handleConsent(true)} style={{ background: 'white', border: '1px solid white', color: 'black', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.875rem' }}>Accept</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`
  }
];

pages.forEach(p => {
  const dir = path.dirname(p.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(p.path, p.content);
  console.log('Created:', p.path);
});
