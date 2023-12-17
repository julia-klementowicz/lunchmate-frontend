import Navbar from '@/components/navigation/Navbar';
import NotLoggedInBanner from '@/components/banners/NotLoggedInBanner';
import MostPopularSection from '@/components/sections/homepage/MostPopularSection';
import LastAddedSection from '@/components/sections/homepage/LastAddedSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='m-auto p-4 max-w-[1300px]'>
        <NotLoggedInBanner />
        <MostPopularSection />
        <LastAddedSection />
      </main>
    </>
  );
}
