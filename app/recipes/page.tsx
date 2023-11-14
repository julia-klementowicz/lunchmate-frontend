import CategoryCard from '@/components/cards/CategoryCard';
import Navbar from '@/components/navigation/Navbar';

export default function RecipesPage() {
  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 sm:mt-2 p-4 max-w-[1300px]'>
        <h2 className='text-xl sm:text-2xl font-semibold'>Wybierz kategorie przepisów</h2>
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
