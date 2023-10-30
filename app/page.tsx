import Navbar from '@/components/navigation/Navbar';
import NotLoggedInBanner from '@/components/banners/NotLoggedInBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='m-auto p-4 max-w-[1500px]'>
        <NotLoggedInBanner />
      </main>
    </>
  );
}
