'use client';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import InterestFormModal from '@/components/InterestFormModal';

import { artistsData } from '../../artists/data';

import { allArtworks } from '../data';

export default function ArtworkDetail({ params }: { params: { id: string } }) {
  const [modalOpen, setModalOpen] = useState(false);
  
  const currentArt = allArtworks.find(a => a.id === params.id) || allArtworks[0];
  const artist = artistsData.find(a => a.name === currentArt.artist);
  const artistLink = artist ? `/artists/${artist.id}` : '/artists';
  
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container">
        <Link href="/artworks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          
          {/* Main Selected Artwork Image */}
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
             <img src={currentArt.img} alt={currentArt.title} style={{ maxWidth: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }} />
          </div>
          
          {/* Artwork Data Block */}
          <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'left' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <h1 className="text-title" style={{ marginBottom: '1rem', letterSpacing: '-0.02em' }}>{currentArt.title}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--color-grey-medium)' }}>
                    <Link href={artistLink} style={{ borderBottom: '1px solid var(--color-grey-medium)', paddingBottom: '0.25rem' }}>
                      {currentArt.artist}
                    </Link>
                  </h2>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ color: 'var(--color-grey-medium)', textDecoration: 'line-through', fontSize: '1.125rem' }}>
                        CHF {currentArt.originalPrice?.toLocaleString()}
                      </span>
                      <span style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)', padding: '0.25rem 0.5rem', fontSize: '0.75rem', fontWeight: 600 }}>
                        -{currentArt.discount}%
                      </span>
                    </div>
                    <div style={{ fontSize: '2rem', color: 'var(--color-white)', fontWeight: 300, marginTop: '0.25rem' }}>
                      CHF {currentArt.discountPrice?.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ 
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem',
                padding: '3rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)'
              }}>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Artist</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>{currentArt.artist}</p>
                </div>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Material</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>{currentArt.material}</p>
                </div>
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Dimensions</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>{currentArt.dim}</p>
                </div>

              </div>

              <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-grey-light)', fontWeight: 300, maxWidth: '650px' }}>
                <p>{currentArt.desc}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginTop: '1rem', paddingTop: '2rem' }}>
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

      {/* In-Situ Art Gallery Mockups */}
      <div className="container" style={{ marginTop: '8rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <span className="text-caption" style={{ color: 'var(--color-grey-medium)', marginBottom: '1rem' }}>Exhibition</span>
          <h2 className="text-title" style={{ fontSize: '2rem' }}>Art Gallery</h2>
          <p style={{ color: 'var(--color-grey-light)', marginTop: '1rem', maxWidth: '600px', fontWeight: 300 }}>
            Immerse yourself in curated perspectives of our contemporary collection.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
          {(currentArt.gallery || [
            { img: '/assets/art%20gallery1.jpg', label: 'Gallery Vision I' },
            { img: '/assets/art%20gallery2.jpg', label: 'Gallery Vision II' },
            { img: '/assets/art%20gallery3.jpg', label: 'Gallery Vision III' },
            { img: '/assets/art%20gallery4.jpg', label: 'Gallery Vision IV' },
            { img: '/assets/art%20gallery5.jpg', label: 'Gallery Vision V' },
            { img: '/assets/art%20gallery6.jpg', label: 'Gallery Vision VI' }
          ]).map((mockup, i) => (
             <div key={i} style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
               <div style={{ overflow: 'hidden' }}>
                 <img 
                   src={mockup.img} 
                   alt={mockup.label} 
                   style={{ 
                     width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', transition: 'transform var(--transition-slow)' 
                   }} 
                   onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')} 
                   onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} 
                 />
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                 <p className="text-caption" style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)' }}>{mockup.label}</p>
                 <p className="text-caption" style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)' }}>Perspective</p>
               </div>
             </div>
          ))}
        </div>
      </div>

      <InterestFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} artworkTitle={currentArt.title} artistName={currentArt.artist} />
    </main>
  );
}