import CategoryCard from '@/components/cards/CategoryCard';
import Navbar from '@/components/navigation/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lunch Mate - Przepisy',
  description: 'Lunch Mate - best social media app with YOUR recipies!',
};

export default function RecipesPage() {
  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 max-w-[1300px] p-4 sm:mt-2'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          Wybierz kategorie przepisów
        </h2>
        <div className='mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4'>
          <CategoryCard
            label='Śniadania'
            imageLink='https://static.chloeting.com/recipes/61ffa47c2a18c23f7d7f985a/images/vegan-breakfast-plate-1.webp'
          />
          <CategoryCard
            label='Dania główne'
            imageLink='https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg'
          />
          <CategoryCard
            label='Desery'
            imageLink='https://cookiesandcups.com/wp-content/uploads/2015/05/ChocolateMarshmallowPie-19-350x500.jpg'
          />
          <CategoryCard
            label='Śniadania'
            imageLink='https://static.chloeting.com/recipes/61ffa47c2a18c23f7d7f985a/images/vegan-breakfast-plate-1.webp'
          />
          <CategoryCard
            label='Dania główne'
            imageLink='https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg'
          />
          <CategoryCard
            label='Desery'
            imageLink='https://cookiesandcups.com/wp-content/uploads/2015/05/ChocolateMarshmallowPie-19-350x500.jpg'
          />
        </div>
      </main>
    </>
  );
}
