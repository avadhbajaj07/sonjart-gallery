'use client';
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
             <img src="/assets/art%20gallery1.jpg" alt="Wut" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'left' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <h1 className="text-title" style={{ marginBottom: '1rem', letterSpacing: '-0.02em' }}>Wut</h1>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--color-grey-medium)' }}>
                  <Link href="/artists/beatrice-jud" style={{ 
                    borderBottom: '1px solid var(--color-grey-medium)', 
                    paddingBottom: '0.25rem', 
                    transition: 'all 0.3s ease' 
                  }}>
                    Beatrice Jud
                  </Link>
                </h2>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '3rem',
                padding: '3rem 0',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)'
              }}>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Artist</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>Beatrice Jud</p>
                </div>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Material</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>Acrylic on canvas</p>
                </div>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Dimensions</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>100 x 100 cm</p>
                </div>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Year</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>2025</p>
                </div>
              </div>

              <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-grey-light)', fontWeight: 300, maxWidth: '650px' }}>
                <p>
                  "Wut" (Anger) explores the profound intensity and raw energy of unrestrained emotion. The layered acrylic application invites viewers to embrace the chaos and find an internal focus.
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '2rem', 
                alignItems: 'center', 
                marginTop: '1rem',
                paddingTop: '2rem'
              }}>
                <button className="btn-primary" onClick={() => setModalOpen(true)} style={{ padding: '1.25rem 3rem' }}>
                  Inquire About This Piece
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span className="text-caption" style={{ color: 'var(--color-grey-medium)' }}>Status</span>
                  <span style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--color-white)' }}>Available for Curation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* In-Situ Mockup Gallery */}
      <div className="container" style={{ marginTop: '8rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <span className="text-caption" style={{ color: 'var(--color-grey-medium)', marginBottom: '1rem' }}>In-Situ</span>
          <h2 className="text-title" style={{ fontSize: '2rem' }}>Spatial Previews</h2>
          <p style={{ color: 'var(--color-grey-light)', marginTop: '1rem', maxWidth: '600px', fontWeight: 300 }}>
            Visualize the scale and aesthetic impact of this piece across various architectural environments, from private residences to corporate lobbies.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
          {[
            { img: '/assets/art%20gallery2.jpg', label: 'Corporate Atrium' },
            { img: '/assets/art%20gallery3.jpg', label: 'Private Residence' },
            { img: '/assets/art%20gallery4.jpg', label: 'Boutique Hotel Lobby' },
            { img: '/assets/art%20gallery5.jpg', label: 'Minimalist Studio' }
          ].map((mockup, i) => (
             <div key={i} style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
               <div style={{ overflow: 'hidden' }}>
                 <img 
                   src={mockup.img} 
                   alt={mockup.label} 
                   style={{ 
                     width: '100%', 
                     height: 'auto', 
                     aspectRatio: '4/3', 
                     objectFit: 'cover', 
                     transition: 'transform var(--transition-slow)' 
                   }} 
                   onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')} 
                   onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} 
                 />
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                 <p className="text-caption" style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)' }}>{mockup.label}</p>
                 <p className="text-caption" style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)' }}>Visualization</p>
               </div>
             </div>
          ))}
        </div>
      </div>

      <InterestFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} artworkTitle="Wut" artistName="Beatrice Jud" />
    </main>
  );
}