export default function About() {
  return (
    <main style={{ padding: '12rem 0 var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-title" style={{ marginBottom: '4rem' }}>About Sonj</h1>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
          <img src="/assets/sonja.jpeg" alt="Sonja Schlagel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
        </div>
        <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-white)', opacity: 0.9 }}>
          <p style={{ marginBottom: '2rem' }}>Sonja Schlagel, founder and owner of SonjART Galerie, was born in Alkmaar, the Netherlands, in 1966. She moved to Switzerland in 1990, where she began her professional career in pharmaceutical sales. From 1992 to 1995, she worked for Marion Merrell Dow (MMD), a division of Dow Chemical.  Sonja continued her career with Hoechst, Glaxo and later Merck Sharp & Dohme, gaining extensive experience in sales and project management.</p>
          <p style={{ marginBottom: '2rem' }}>At the age of forty, Sonja chose to follow a new professional path—one that united her lifelong passion for art with her strong background in sales and management. After completing a two-year apprenticeship with one of Amsterdam’s most respected and long-established art dealers, she founded SonjART Galerie in Rapperswil, Switzerland.</p>
          <p style={{ marginBottom: '2rem' }}>In 2018, Sonja closed the gallery in Rapperswil due to health reasons. Today, feeling restored, inspired, and full of energy, she is reconnecting with her passion for both art and sales. She delights in helping people find the perfect artwork for their homes—pieces that bring beauty, individuality, and character, transforming a house into a truly personal and original space.</p>
          <p style={{ marginBottom: '2rem' }}>Sonja is married and has two Shih Tzus, Charlie and Sofie and her hobbies are walking the dogs, reading and photography.</p>
        </div>
      </div>
    </main>
  );
}