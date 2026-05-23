import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exhibitions & Events | sonjART Gallery Zürich 2026',
  description: 'Join sonjART at Kunstraum 15, Zeltweg 15, Zürich — 5 to 15 June 2026. Opening vernissage, public viewing days and special exhibition prices. RSVP now.',
  alternates: {
    canonical: 'https://www.sonjart.ch/events',
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
