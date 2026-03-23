'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Art Collections', href: '/artworks' },
    { name: 'Artists', href: '/artists' },
    { name: 'About Sonja', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all var(--transition-medium)',
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          padding: isScrolled ? '1rem 0' : '2rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logo.png" alt="SONJ ART Logo" style={{ height: '40px', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'block' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Global CSS for Navigation that is tough to inline */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
            gap: 2.5rem;
            align-items: center;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link {
          font-size: 0.875rem;
          color: var(--color-white);
          opacity: 0.8;
          transition: opacity 0.2s ease;
          letter-spacing: 0.02em;
        }
        .nav-link:hover {
          opacity: 1;
        }
      `}} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--color-black)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                <img src="/assets/logo.png" alt="SONJ ART Logo" style={{ height: '40px', objectFit: 'contain' }} />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <X size={28} />
              </button>
            </div>
            
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', marginTop: '4vh' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    style={{ fontSize: '2rem', fontWeight: 300 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
