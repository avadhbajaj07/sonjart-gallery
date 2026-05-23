import type { Metadata } from 'next';
import { artistsData } from '../../artists/data';
import { allArtworks } from '../data';
import ArtworkDetailClient from './ArtworkDetailClient';

export function generateStaticParams() {
   return allArtworks.map((art) => ({ id: art.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const art = allArtworks.find(a => a.id === resolvedParams.id);
  
  if (!art) {
    return { title: 'Artwork | sonjART' };
  }

  return {
    title: `${art.title} by ${art.artist} — Buy Original | sonjART`,
    description: `${art.title} by ${art.artist}. Original ${art.material}, ${art.dim}. Available at sonjART gallery Zürich at exhibition price CHF ${art.discountPrice}. Enquire now.`,
    alternates: {
      canonical: `https://www.sonjart.ch/artworks/${art.id}`,
    },
    openGraph: {
      title: `${art.title} by ${art.artist} — sonjART`,
      description: art.desc.substring(0, 160),
      images: [{ url: `https://www.sonjart.ch${art.img}` }],
    }
  };
}

export default async function ArtworkDetail({ params }: Props) {
  const resolvedParams = await params;
  const currentArt = allArtworks.find(a => a.id === resolvedParams.id) || allArtworks[0];
  const artist = artistsData.find(a => a.name === currentArt.artist);
  const artistLink = artist ? `/artists/${artist.id}` : '/artists';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: currentArt.title,
    image: `https://www.sonjart.ch${currentArt.img}`,
    description: currentArt.desc,
    creator: {
      '@type': 'Person',
      name: currentArt.artist,
      url: artist ? `https://www.sonjart.ch/artists/${artist.id}` : 'https://www.sonjart.ch/artists',
    },
    artMedium: currentArt.material,
    artworkSurface: currentArt.material.includes('canvas') ? 'Canvas' : currentArt.material.includes('panel') || currentArt.material.includes('Panel') ? 'Panel' : 'Other',
    width: { '@type': 'Distance', name: currentArt.dim },
    height: { '@type': 'Distance', name: currentArt.dim },
    offers: {
      '@type': 'Offer',
      price: currentArt.discountPrice,
      priceCurrency: 'CHF',
      availability: 'https://schema.org/InStock',
      validThrough: '2026-06-15',
      seller: {
        '@type': 'Organization',
        name: 'sonjART',
        url: 'https://www.sonjart.ch',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArtworkDetailClient currentArt={currentArt} artistLink={artistLink} />
    </>
  );
}