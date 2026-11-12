import type { Metadata } from 'next';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/manrope';
import './globals.css';
import './cinematic.css';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = {
 metadataBase: siteUrl ? new URL(siteUrl) : undefined,
 alternates: siteUrl ? { canonical: '/' } : undefined,
 title: 'Suryansh Singh — AI/ML & Full-Stack Developer',
 description: 'Suryansh Singh builds intelligent applications with AI, machine learning, and modern web technologies. Explore projects, experience, and engineering skills.',
 openGraph: { title: 'Suryansh Singh — Building with intelligence.', description: 'AI/ML Engineer · Full-Stack Developer · Problem Solver. Explore my work and get in touch.', type: 'website', locale: 'en_IN', images: siteUrl ? [{url: '/og.png', width: 1200, height: 630, alt: 'Suryansh Singh — AI/ML and Full-Stack Developer'}] : [] },
 twitter: { card: 'summary_large_image', title: 'Suryansh Singh — AI/ML & Full-Stack Developer', images: siteUrl ? ['/og.png'] : [] },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>; }
