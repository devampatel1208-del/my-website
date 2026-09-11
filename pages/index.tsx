import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Website - Fast & Modern</title>
        <meta name="description" content="A lightning-fast website built with Next.js and UI UX Pro Max" />
      </Head>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
