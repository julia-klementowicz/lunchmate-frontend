import Navbar from '@/components/navigation/Navbar';
import NotLoggedInBanner from '@/components/banners/NotLoggedInBanner';
import MostPopularSection from '@/components/sections/homepage/MostPopularSection';
import LastAddedSection from '@/components/sections/homepage/LastAddedSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='m-auto max-w-[1300px] p-4'>
        <NotLoggedInBanner />
        <MostPopularSection />
        <LastAddedSection />
      </main>
    </>
  );
}
