import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sonja Schlagel | 20 Years Curating Art in Switzerland',
  description: 'Sonja Schlagel founded sonjART in Zürich after 20 years in pharmaceutical management. Her gallery connects collectors with original artworks that transform homes.',
  alternates: {
    canonical: 'https://www.sonjart.ch/about',
  },
};

export default function About() {
  return (
    <main style={{ paddingTop: '12rem', paddingBottom: 'var(--spacing-xl)', minHeight: '100vh' }} className="container fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-title" style={{ marginBottom: '4rem' }}>About Sonja</h1>
        <div style={{ overflow: 'hidden', marginBottom: '4rem', maxHeight: '500px' }}>
          <img src="/assets/sonja.jpeg" alt="Sonja Schlagel — founder and curator of sonjART gallery Zürich" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        </div>
        <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-white)', opacity: 0.9 }}>
          <p style={{ marginBottom: '2rem' }}>Sonja Schlagel, founder and owner of sonjART Galerie, was born in Alkmaar, the Netherlands, in 1966. She moved to Switzerland in 1990, where she built a successful career in the pharmaceutical industry, working with internationally recognized companies including Marion Merrell Dow (MMD), Hoechst, Glaxo, and Merck Sharp &amp; Dohme. During these years, she developed strong expertise in sales, client relations, and project management.</p>
          <p style={{ marginBottom: '2rem' }}>At the age of forty, Sonja made a decisive shift—choosing to follow a path that connected her professional strengths with her lifelong passion for art. She completed a two-year apprenticeship with one of Amsterdam's most respected art dealers, gaining deep insight into the art world, curation, and collector relationships.</p>
          <p style={{ marginBottom: '2rem' }}>She later founded sonjART Galerie in Rapperswil, Switzerland, where she built a carefully curated collection and developed a reputation for her personal approach and refined artistic eye.</p>
          <p style={{ marginBottom: '2rem' }}>In 2018, she closed the gallery due to health reasons. Today, feeling restored, inspired, and full of energy, Sonja is reconnecting with her passion for art and sharing it in a more personal and flexible way. She is dedicated to helping clients find artworks that bring character, emotion, and individuality into their living spaces.</p>
          <p style={{ marginBottom: '2rem' }}>For Sonja, art is not simply decoration—it is a reflection of personality, memory, and feeling. Her goal is to guide each client toward pieces that truly resonate with them and transform their environment into something meaningful.</p>
          <p style={{ marginBottom: '4rem' }}>Sonja is married and shares her life with 2 Shih Tzus Charlie and Sofie. She lives in Amsterdam, Valencia and Zürich. Being in nature, performing Qi gong, swimming and reading brings her clarity, balance and quiet inspiration in her busy life.</p>

          {/* The sonjART Story */}
          <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem', color: 'var(--color-white)' }}>The sonjART Story</h2>
          <p style={{ marginBottom: '2rem' }}>sonjART was founded with a single conviction: that original art has the power to transform a home into something truly personal. Over more than 20 years of curation, Sonja has built relationships with artists from across Europe — from Dutch realists and Swiss expressionists to CoBrA movement pioneers and Hungarian hyperrealists.</p>
          <p style={{ marginBottom: '2rem' }}>The gallery has represented <strong>19 international artists</strong> and curated a collection of over <strong>65 original paintings</strong>, each selected for its emotional depth, technical quality, and ability to resonate with collectors who seek something beyond the ordinary.</p>
          <p style={{ marginBottom: '4rem' }}>Collectors who have acquired works through sonjART span Switzerland, Germany, the Netherlands, and beyond. Many return not just once, but again and again — because finding the right piece of original art is a journey, and Sonja is a trusted guide on that path.</p>

          {/* Curation Philosophy */}
          <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem', color: 'var(--color-white)' }}>Curation Philosophy</h2>
          <p style={{ marginBottom: '2rem' }}>Sonja does not collect art by category or trend. She collects by feeling. When she encounters a work that stops her — that makes her pause, look twice, and feel something — she knows it belongs in the collection.</p>
          <p style={{ marginBottom: '2rem' }}>The artists represented by sonjART range from internationally recognised names such as <strong>Karel Appel</strong> and <strong>Corneille</strong> — founding members of the CoBrA movement — to emerging and mid-career painters who are creating some of the most exciting original work available in Switzerland today.</p>
          <p style={{ marginBottom: '4rem' }}>Whether you are looking for a large statement oil painting for your living room, a delicate still life for your dining space, or an abstract work that speaks to your personal aesthetic, Sonja offers individual guidance — free of pressure, rooted in genuine connection.</p>

          {/* Exhibition History */}
          <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem', color: 'var(--color-white)' }}>Exhibition History</h2>
          <ul style={{ marginBottom: '4rem', paddingLeft: '1.5rem', color: 'var(--color-grey-light)' }}>
            <li style={{ marginBottom: '1rem' }}><strong>June 2026</strong> — Kunstraum 15, Zeltweg 15, Zürich — Two-week pop-up exhibition featuring 19 international artists</li>
            <li style={{ marginBottom: '1rem' }}><strong>2006–2018</strong> — sonjART Galerie, Rapperswil, Switzerland — Permanent gallery space with rotating exhibitions and artist openings</li>
            <li style={{ marginBottom: '1rem' }}><strong>2004–2006</strong> — Private exhibitions and art consultancy, Zürich region</li>
          </ul>

          {/* FAQ */}
          <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem', color: 'var(--color-white)' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>How do I acquire a piece?</h3>
            <p style={{ color: 'var(--color-grey-light)' }}>Browse the collection online and use the enquiry form on each artwork page, or send an email to <a href="mailto:info@sonjart.ch" style={{ color: 'var(--color-white)' }}>info@sonjart.ch</a>. Sonja will personally respond to arrange a viewing or answer any questions.</p>
          </div>

          <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Do you offer shipping?</h3>
            <p style={{ color: 'var(--color-grey-light)' }}>Yes. Works are available for collection in Zürich or via insured shipping across Switzerland and the EU. Shipping costs and packaging are discussed at time of purchase.</p>
          </div>

          <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Can I view works by appointment?</h3>
            <p style={{ color: 'var(--color-grey-light)' }}>Absolutely. Private viewings are available by appointment in Zürich. During the June 2026 exhibition at Kunstraum 15, public viewing days are scheduled — see the <a href="/events" style={{ color: 'var(--color-white)' }}>Events page</a> for full details.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Can you help me choose the right artwork for my home?</h3>
            <p style={{ color: 'var(--color-grey-light)' }}>This is Sonja's speciality. With over 20 years of experience matching collectors with works they love, she offers personal art consultation — whether you are furnishing a new home, renovating, or simply looking for a piece that speaks to you. <a href="/contact" style={{ color: 'var(--color-white)' }}>Get in touch</a> to start the conversation.</p>
          </div>

        </div>
      </div>
    </main>
  );
}