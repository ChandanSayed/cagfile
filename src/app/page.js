import Category from '@/components/Category';
import Hero from '@/components/Hero';
import Map from '@/components/Map';
import Partners from '@/components/Partners';
import Reference from '@/components/Reference';
import Suggest from '@/components/Suggest';
import Video from '@/components/Video';

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Map />
      <Video />
      <Reference />
      <Suggest />
      <Partners />
    </main>
  );
}
