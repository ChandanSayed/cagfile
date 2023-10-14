'use client';
import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Map from '@/components/Map';
import Partners from '@/components/Partners';
import Reference from '@/components/Reference';
import Suggest from '@/components/Suggest';
import Video from '@/components/Video';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Category />
        <Map />
        <Video />
        <Reference />
        <Suggest />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
