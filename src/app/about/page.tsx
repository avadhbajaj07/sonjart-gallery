import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sonja Schlagel | sonjART Founder',
  description: 'Learn about Sonja Schlagel’s journey from the pharmaceutical industry to founding sonjART Gallery. Discover her passion for curation and her personal approach to fine art consultancy.',
};

export default function About() {
  return (
    <main style={{ paddingTop: '12rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-title" style={{ marginBottom: '4rem' }}>About Sonja</h1>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
          <img src="/assets/sonja.jpeg" alt="Sonja Schlagel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
        </div>
        <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-white)', opacity: 0.9 }}>
          <p style={{ marginBottom: '2rem' }}>Sonja Schlagel, founder and owner of sonjART Galerie, was born in Alkmaar, the Netherlands, in 1966. She moved to Switzerland in 1990, where she built a successful career in the pharmaceutical industry, working with internationally recognized companies including Marion Merrell Dow (MMD), Hoechst, Glaxo, and Merck Sharp & Dohme. During these years, she developed strong expertise in sales, client relations, and project management.</p>
          <p style={{ marginBottom: '2rem' }}>At the age of forty, Sonja made a decisive shift—choosing to follow a path that connected her professional strengths with her lifelong passion for art. She completed a two-year apprenticeship with one of Amsterdam’s most respected art dealers, gaining deep insight into the art world, curation, and collector relationships.</p>
          <p style={{ marginBottom: '2rem' }}>She later founded sonjART Galerie in Rapperswil, Switzerland, where she built a carefully curated collection and developed a reputation for her personal approach and refined artistic eye.</p>
          <p style={{ marginBottom: '2rem' }}>In 2018, she closed the gallery due to health reasons. Today, feeling restored, inspired, and full of energy, Sonja is reconnecting with her passion for art and sharing it in a more personal and flexible way. She is dedicated to helping clients find artworks that bring character, emotion, and individuality into their living spaces.</p>
          <p style={{ marginBottom: '2rem' }}>For Sonja, art is not simply decoration—it is a reflection of personality, memory, and feeling. Her goal is to guide each client toward pieces that truly resonate with them and transform their environment into something meaningful.</p>
          <p style={{ marginBottom: '2rem' }}>Sonja is married and shares her life with 2 Shih Tzus Charlie and Sofie. She lives in Amsterdam, Valencia and Zürich. Being in nature, performing Qi gong, swimming and reading brings her clarity, balance and quiet inspiration in her busy life.</p>
        </div>
      </div>
    </main>
  );
}