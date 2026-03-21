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
             <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=1600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
      <InterestFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} artworkTitle="The Silence" artistName="Elena Rostova" />
    </main>
  );
}