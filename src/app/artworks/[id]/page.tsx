'use client';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import InterestFormModal from '@/components/InterestFormModal';

const allArtworks = [
  { id: '1', img: '/assets/art1.jpg', title: 'Absence of Color', artist: 'Henk Vierveijzer', year: '2023', material: 'Oil on canvas', dim: '120 x 100 cm', desc: 'A profound exploration of the absence of color.', originalPrice: 4500, discount: 15, discountPrice: 3825 },
  { id: '2', img: '/assets/art2.jpg', title: 'Monochrome Dream', artist: 'Beatrice Jud', year: '2024', material: 'Acrylic on canvas', dim: '100 x 100 cm', desc: 'The layered acrylic application invites viewers to embrace the monochrome aesthetic.', originalPrice: 3200, discount: 10, discountPrice: 2880 },
  { id: '3', img: '/assets/art3.jpg', title: 'Abstract Reality', artist: 'F. Escobar', year: '2025', material: 'Mixed media', dim: '150 x 120 cm', desc: 'Finding inspiration in layered urban landscapes.', originalPrice: 5800, discount: 20, discountPrice: 4640 },
  { id: '4', img: '/assets/art4.jpg', title: 'Visions of Light', artist: 'Nicole Laceur', year: '2023', material: 'Oil on canvas', dim: '90 x 90 cm', desc: 'Impressions of spring and vibrant light.', originalPrice: 2900, discount: 5, discountPrice: 2755 },
  { id: '5', img: '/assets/art5.jpg', title: 'Echoes I', artist: 'Elso Schiavo', year: '2026', material: 'Acrylic on canvas', dim: '110 x 90 cm', desc: 'Imaginative and figurative expressions.', originalPrice: 4100, discount: 12, discountPrice: 3608 },
  { id: '6', img: '/assets/art6.jpg', title: 'Spatial Void', artist: 'Nicole Janssen', year: '2026', material: 'Oil and acrylic', dim: '140 x 110 cm', desc: 'A spatial reflection of natural moods.', originalPrice: 5200, discount: 15, discountPrice: 4420 },
  { id: '7', img: '/assets/art7.jpg', title: 'Echoes II', artist: 'Nicole Janssen', year: '2026', material: 'Oil and acrylic', dim: '140 x 110 cm', desc: 'Deep sensitivity to atmosphere and calm introspection.', originalPrice: 5200, discount: 15, discountPrice: 4420 },
  { id: '8', img: '/assets/art8.jpg', title: 'Fragmented', artist: 'F. Escobar', year: '2025', material: 'Mixed media', dim: '130 x 130 cm', desc: 'Capturing the pulse of urban life and human complexity.', originalPrice: 4800, discount: 18, discountPrice: 3936 },
  { id: '9', img: '/assets/art9.jpg', title: 'Spectrum', artist: 'Beatrice Jud', year: '2023', material: 'Acrylic on canvas', dim: '100 x 100 cm', desc: 'Living with bold primary colors and intense visual language.', originalPrice: 3600, discount: 10, discountPrice: 3240 },
  { id: '10', img: '/assets/art10.jpg', title: 'Lost Forms', artist: 'Elso Schiavo', year: '2022', material: 'Acrylic on canvas', dim: '120 x 120 cm', desc: 'Playful, tender, and gently ironic shapes.', originalPrice: 3900, discount: 15, discountPrice: 3315 },
  { id: '11', img: '/assets/S030.JPG', title: 'A lady reading', artist: 'Nicole Laceur', year: '2026', material: 'Oil on canvas', dim: '60x70 cm', desc: 'A serene and evocative painting of a lady reading, capturing a moment of quiet reflection.', originalPrice: 3900, discount: 70, discountPrice: 1170 },
  { id: '12', img: '/assets/2801.jpg', title: 'Untitled (yellow ladies)', artist: 'Corneille', year: '1991', material: 'Litho signed behind glass', dim: '40 x 64 cm', desc: 'A vibrant lithograph by Corneille, featuring his signature bold colors and expressive forms. Ed. 200.', originalPrice: 1100, discount: 50, discountPrice: 550 },
  { id: '13', img: '/assets/S098.JPG', title: 'Longing', artist: 'Nicole Janssen', year: '2026', material: 'Oil on canvas', dim: '80 x 60 cm', desc: 'An expressive exploration of atmosphere and emotion in blue tones, capturing a deep sense of introspection.', originalPrice: 4200, discount: 80, discountPrice: 840 },
  { id: '14', img: '/assets/S108.JPG', title: 'Wut', artist: 'Beatrice Jud', year: '2026', material: 'Acrylic on canvas and frame', dim: '100 x 100 cm', desc: 'A powerful abstract piece characterized by bold primary colors and dynamic brushwork, exploring intense emotional themes.', originalPrice: 5500, discount: 50, discountPrice: 2750 },
  { id: '15', img: '/assets/S026.JPG', title: 'Autumn in Paris', artist: 'Cees Müller', year: '2026', material: 'Oil on Canvas', dim: '80 x 100 cm', desc: 'A classic and evocative street scene capturing the warm atmospheric glow of a Parisian autumn evening.', originalPrice: 5900, discount: 60, discountPrice: 2360 },
  { id: '16', img: '/assets/Toro Small I.JPG', title: 'Toro 2', artist: 'F. Escobar', year: '2026', material: 'Oil on canvas', dim: '50 x 50 cm', desc: 'A dynamic and expressive depiction of a bull, showcasing Escobar\'s signature neo-expressionist style with bold reds and powerful energy.', originalPrice: 2000, discount: 70, discountPrice: 600 },
];

export default function ArtworkDetail({ params }: { params: { id: string } }) {
  const [modalOpen, setModalOpen] = useState(false);
  
  const currentArt = allArtworks.find(a => a.id === params.id) || allArtworks[0];
  
  return (
    <main style={{ padding: '8rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="fade-in">
      <div className="container">
        <Link href="/artworks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem', color: 'var(--color-grey-medium)' }}>
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          
          {/* Main Selected Artwork Image */}
          <div style={{ aspectRatio: '4/5', width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
             <img src={currentArt.img} alt={currentArt.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          {/* Artwork Data Block */}
          <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'left' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <h1 className="text-title" style={{ marginBottom: '1rem', letterSpacing: '-0.02em' }}>{currentArt.title}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--color-grey-medium)' }}>
                    <Link href="/artists" style={{ borderBottom: '1px solid var(--color-grey-medium)', paddingBottom: '0.25rem' }}>
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
                <div>
                  <h3 className="text-caption" style={{ marginBottom: '0.75rem', color: 'var(--color-grey-dark)', letterSpacing: '0.1em' }}>Year</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-white)' }}>{currentArt.year}</p>
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
          {[
            { img: '/assets/art%20gallery1.jpg', label: 'Gallery Vision I' },
            { img: '/assets/art%20gallery2.jpg', label: 'Gallery Vision II' },
            { img: '/assets/art%20gallery3.jpg', label: 'Gallery Vision III' },
            { img: '/assets/art%20gallery4.jpg', label: 'Gallery Vision IV' },
            { img: '/assets/art%20gallery5.jpg', label: 'Gallery Vision V' },
            { img: '/assets/art%20gallery6.jpg', label: 'Gallery Vision VI' }
          ].map((mockup, i) => (
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