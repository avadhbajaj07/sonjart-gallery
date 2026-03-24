'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function InterestFormModal({ 
  isOpen, 
  onClose, 
  artworkTitle, 
  artistName 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  artworkTitle: string; 
  artistName: string; 
}) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      artwork: `${artworkTitle} by ${artistName}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert('There was a problem sending your inquiry. Please try again later.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 100,
            }}
          />
          <div
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 101,
              padding: '1.5rem',
              pointerEvents: 'none'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              style={{
                backgroundColor: 'var(--color-black)',
                border: '1px solid var(--color-border)',
                padding: '2.5rem',
                width: '100%',
                maxWidth: '500px',
                maxHeight: '90vh',
                overflowY: 'auto',
                pointerEvents: 'auto',
                position: 'relative'
              }}
            >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 400 }}>Show Interest</h2>
            <p style={{ color: 'var(--color-grey-medium)', marginBottom: '2rem', fontSize: '0.875rem' }}>
              Inquire about {artworkTitle} by {artistName}
            </p>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#4caf50' }}>
                <p>Thank you. Your inquiry has been sent to info@sonjart.ch. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-grey-medium)' }}>Name</label>
                  <input required name="name" type="text" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'transparent', border: '1px solid var(--color-border)', color: 'white', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-grey-medium)' }}>Email</label>
                  <input required name="email" type="email" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'transparent', border: '1px solid var(--color-border)', color: 'white', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-grey-medium)' }}>Message</label>
                  <textarea 
                    required 
                    name="message"
                    rows={4} 
                    defaultValue={`I am interested in acquiring "${artworkTitle}" by ${artistName}. Please send me more information regarding pricing and availability.`}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'transparent', border: '1px solid var(--color-border)', color: 'white', outline: 'none', resize: 'vertical' }} 
                  />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-grey-medium)', lineHeight: 1.5 }}>
                  By submitting this form, you acknowledge our <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>. This is a non-binding purchase interest.
                </div>
                <button type="submit" disabled={status === 'submitting'} className="btn-primary" style={{ width: '100%', opacity: status === 'submitting' ? 0.7 : 1 }}>
                  {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
