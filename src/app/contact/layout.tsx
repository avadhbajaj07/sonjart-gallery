import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact sonjART Gallery Zürich | Book a Viewing',
  description: 'Get in touch with sonjART gallery in Zürich. Book a private viewing, enquire about a painting, or request personal art consultation. Email: info@sonjart.ch',
  alternates: {
    canonical: 'https://www.sonjart.ch/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
