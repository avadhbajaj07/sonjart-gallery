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
    title: `${art.title} by ${art.artist} | sonjART Collection`,
    description: `Acquire the original painting "${art.title}" by ${art.artist}. ${art.material}, ${art.dim}. Available at a special exhibition price at sonjART Zurich.`,
    alternates: {
      canonical: `https://sonjart.ch/artworks/${art.id}`,
    },
    openGraph: {
      title: `${art.title} - ${art.artist}`,
      description: art.desc.substring(0, 160) + '...',
      images: [{ url: `https://sonjart.ch${art.img}` }],
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
    image: `https://sonjart.ch${currentArt.img}`,
    description: currentArt.desc,
    creator: {
      '@type': 'Person',
      name: currentArt.artist,
    },
    material: currentArt.material,
    width: currentArt.dim,
    offers: {
      '@type': 'Offer',
      price: currentArt.discountPrice,
      priceCurrency: 'CHF',
      availability: 'https://schema.org/InStock',
    }
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