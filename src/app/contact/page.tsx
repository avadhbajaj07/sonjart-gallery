'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
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
        setStatus('idle');
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert('There was a problem sending your message. Please try again later.');
    }
  };

  return (
    <main style={{ paddingTop: '12rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
        <div>
          <h1 className="text-title" style={{ marginBottom: '2rem' }}>Contact</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-grey-medium)' }}>
            We welcome inquiries regarding the collection, private viewings, and artist representation.
          </p>
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>Email</p>
            <a href="mailto:info@sonjart.ch" style={{ fontSize: '1.5rem' }}>info@sonjart.ch</a>
          </div>
          <div>
            <p style={{ marginBottom: '0.5rem' }}>Location</p>
            <p style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Kunstraum 15</p>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-medium)' }}>Zeltweg 15<br/>8032 Zürich<br/>Switzerland</p>
          </div>
        </div>
        <div>
          {status === 'success' ? (
            <div style={{ padding: '3rem', border: '1px solid #4caf50', color: '#4caf50', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem' }}>Thank you!</p>
              <p>Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <input required name="name" type="text" placeholder="Name" style={{ width: '100%', padding: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', color: 'white', outline: 'none', fontSize: '1rem' }} />
              <input required name="email" type="email" placeholder="Email" style={{ width: '100%', padding: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', color: 'white', outline: 'none', fontSize: '1rem' }} />
              <textarea required name="message" placeholder="Message" rows={5} style={{ width: '100%', padding: '1rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--color-border)', color: 'white', outline: 'none', fontSize: '1rem', resize: 'vertical' }} />
              <button disabled={status === 'submitting'} type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem', opacity: status === 'submitting' ? 0.7 : 1 }}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}