'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            maxWidth: '600px',
            backgroundColor: 'var(--color-grey-dark)',
            padding: '1.5rem',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            border: '1px solid var(--color-border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--color-white)' }}>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
            <button onClick={() => handleConsent(false)} style={{ background: 'transparent', border: '1px solid var(--color-border)', color: 'white', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.875rem' }}>Reject</button>
            <button onClick={() => handleConsent(true)} style={{ background: 'white', border: '1px solid white', color: 'black', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.875rem' }}>Accept</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}