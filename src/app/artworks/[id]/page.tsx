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
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="text-title" style={{ marginBottom: '0.5rem' }}>The Silence</h1>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-grey-medium)', marginBottom: '0.5rem' }}><Link href="/artists/elena" style={{ textDecoration: 'underline' }}>Elena Rostova</Link></h2>
            <p className="text-caption" style={{ marginBottom: '3rem' }}>Oil on Canvas • 2025 • 120 x 180 cm</p>
            <p style={{ lineHeight: 1.8, marginBottom: '3rem', color: 'var(--color-grey-medium)' }}>
              "The Silence" explores the profound emptiness following intense emotional experiences. Rostova uses monochromatic depth to invite viewers into a meditative state, challenging the chaotic noise of contemporary life.
            </p>
            <button className="btn-primary" onClick={() => setModalOpen(true)}>Show Interest</button>
          </div>
        </div>
      </div>
      <InterestFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} artworkTitle="The Silence" artistName="Elena Rostova" />
    </main>
  );
}