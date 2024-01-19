import CategoryCard from '@/components/cards/CategoryCard';
import Navbar from '@/components/navigation/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lunch Mate - Przepisy',
  description: 'Lunch Mate - best social media app with YOUR recipies!',
};

export default async function RecipesPage() {
  const categories = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/categories`,
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
      <main className='m-auto mt-1 max-w-[1300px] p-4 sm:mt-2'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          Wybierz kategorie przepisów
        </h2>
        <div className='mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4'>
          {categories.map((category: Category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              label={category.name}
              imageLink={category.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
