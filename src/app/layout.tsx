import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'SONJ ART | Original artworks by international artists, spanning styles from realism to expressionism.',
  description: 'Ultra-luxury contemporary art gallery based in Zürich, Switzerland. Explore exclusive abstract works, modern paintings, and upcoming fine art exhibitions.',
  keywords: ['contemporary art', 'zurich art gallery', 'modern art', 'fine art', 'swiss gallery', 'Sonja Schlagel', 'luxury art', 'abstract paintings'],
  authors: [{ name: 'Sonja Schlagel' }],
  creator: 'SONJ ART',
  openGraph: {
    title: 'SONJ ART | Original artworks by international artists, spanning styles from realism to expressionism.',
    description: 'Ultra-luxury contemporary art gallery based in Zürich, Switzerland.',
    url: 'https://sonjart.ch',
    siteName: 'SONJ ART Gallery',
    images: [
      {
        url: 'https://sonjart.ch/assets/art1.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'SONJ ART Gallery Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SONJ ART | Original artworks by international artists, spanning styles from realism to expressionism.',
    description: 'Explore exclusive abstract works and conceptual fine art in Zürich.',
    images: ['https://sonjart.ch/assets/art1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Navigation />
        <CookieBanner />
        {children}
        <footer style={{ padding: '8rem 2rem 4rem', borderTop: '1px solid var(--color-border)', marginTop: '4rem' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                  <img src="/assets/logo.png" alt="SONJ ART Logo" style={{ height: '40px', objectFit: 'contain' }} />
                </Link>
                <p style={{ color: 'var(--color-grey-medium)', marginBottom: '0.5rem' }}>Original artworks by international artists, spanning styles from realism to expressionism.</p>
                <p style={{ color: 'var(--color-grey-medium)' }}>Zürich, Switzerland</p>
              </div>
              <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="text-caption" style={{ marginBottom: '1rem' }}>Menu</span>
                  <Link href="/artworks" style={{ color: 'var(--color-grey-medium)' }}>Art Collections</Link>
                  <Link href="/artists" style={{ color: 'var(--color-grey-medium)' }}>Artists</Link>
                  <Link href="/about" style={{ color: 'var(--color-grey-medium)' }}>About Sonja</Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="text-caption" style={{ marginBottom: '1rem' }}>Connect</span>
                  <Link href="/events" style={{ color: 'var(--color-grey-medium)' }}>Events</Link>
                  <Link href="/contact" style={{ color: 'var(--color-grey-medium)' }}>Contact</Link>
                  <a href="mailto:info@sonjart.ch" style={{ color: 'var(--color-grey-medium)' }}>info@sonjart.ch</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="text-caption" style={{ marginBottom: '1rem' }}>Legal</span>
                  <Link href="/privacy" style={{ color: 'var(--color-grey-medium)' }}>Privacy Policy</Link>
                  <Link href="/impressum" style={{ color: 'var(--color-grey-medium)' }}>Impressum</Link>
                  <Link href="/terms" style={{ color: 'var(--color-grey-medium)' }}>Terms & Conditions</Link>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-grey-dark)', fontSize: '0.875rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
              <span>© {new Date().getFullYear()} SONJ ART. All rights reserved.</span>
              <span>Switzerland</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
