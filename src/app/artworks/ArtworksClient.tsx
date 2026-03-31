'use client';
import Link from 'next/link';
import { useRef } from 'react';

interface Artwork {
  id: string;
  img: string;
  title: string;
  artist: string;
  discountPrice?: number;
  originalPrice?: number;
}

function ArtworkRow({ title, artworks }: { title: string; artworks: Artwork[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth + 200 : scrollLeft + clientWidth - 200;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="artwork-row-container">
      <h2 className="artwork-row-title">{title}</h2>
      <div className="artwork-row-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')} aria-label="Scroll Left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <div className="artwork-row-scroll" ref={scrollRef}>
          {artworks.map((art) => (
            <Link key={art.id} href={`/artworks/${art.id}`} className="artwork-card">
              <div className="artwork-card-image">
                <img src={art.img} alt={art.title} loading="lazy" />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-white)', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {art.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-white)', fontWeight: 500 }}>
                    CHF {art.discountPrice?.toLocaleString()}
                  </span>
                  {art.originalPrice && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)', textDecoration: 'line-through' }}>
                      CHF {art.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')} aria-label="Scroll Right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </div>
  );
}

export default function ArtworksClient({ allArtworks }: { allArtworks: Artwork[] }) {
  // Group artworks by artist
  const grouped = allArtworks.reduce((acc, art) => {
    const artist = art.artist || 'Unknown';
    if (!acc[artist]) acc[artist] = [];
    acc[artist].push(art);
    return acc;
  }, {} as Record<string, Artwork[]>);

  // Divide into main artists and "Selected Works"
  const mainArtists: { name: string; works: Artwork[] }[] = [];
  const selectedWorks: Artwork[] = [];

  Object.entries(grouped).forEach(([name, works]) => {
    if (works.length > 2) {
      mainArtists.push({ name, works });
    } else {
      selectedWorks.push(...works);
    }
  });

  // Sort main artists alphabetically
  mainArtists.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ paddingTop: '2rem' }}>
      {mainArtists.map((artist) => (
        <ArtworkRow key={artist.name} title={artist.name} artworks={artist.works} />
      ))}
      
      {selectedWorks.length > 0 && (
        <ArtworkRow title="Selected Works" artworks={selectedWorks} />
      )}
    </div>
  );
}
