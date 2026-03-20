import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'SONJ ART | Contemporary Art Gallery Zürich',
  description: 'Ultra-luxury contemporary art gallery based in Zürich, Switzerland. Explore exclusive artworks and upcoming exhibitions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navigation />
        <CookieBanner />
        {children}
        <footer style={{ padding: '8rem 2rem 4rem', borderTop: '1px solid var(--color-border)', marginTop: '4rem' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 500, margin: '0 0 1rem' }}>SONJ ART</h2>
                <p style={{ color: 'var(--color-grey-medium)', marginBottom: '0.5rem' }}>Contemporary Art Gallery</p>
                <p style={{ color: 'var(--color-grey-medium)' }}>Zürich, Switzerland</p>
              </div>
              <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="text-caption" style={{ marginBottom: '1rem' }}>Menu</span>
                  <Link href="/artworks" style={{ color: 'var(--color-grey-medium)' }}>Art Collection</Link>
                  <Link href="/artists" style={{ color: 'var(--color-grey-medium)' }}>Artists</Link>
                  <Link href="/about" style={{ color: 'var(--color-grey-medium)' }}>About Sonj</Link>
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
