import Navbar from '@/components/navigation/Navbar';
import NotLoggedInBanner from '@/components/banners/NotLoggedInBanner';
import MostPopularSection from '@/components/sections/homepage/MostPopularSection';
import LastAddedSection from '@/components/sections/homepage/LastAddedSection';

export default async function Home() {
  const mostLikedRecipes = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/recipes/mostLiked`,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => res.json());

  const mostRecentRecipes = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/recipes/mostRecent`,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => res.json());

  return (
    <>
      <Navbar />
      <main className='m-auto max-w-[1300px] p-4'>
        <NotLoggedInBanner />
        <MostPopularSection recipes={mostLikedRecipes} />
        <LastAddedSection recipes={mostRecentRecipes} />
      </main>
    </>
  );
}
