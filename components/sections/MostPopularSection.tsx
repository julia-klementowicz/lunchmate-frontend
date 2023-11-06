import RecipeCard from '../cards/RecipeCard';

export default function MostPopularSection() {
  return (
    <section className='w-full mt-10 mb-16 flex flex-col'>
      <div className='mb-4 flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>Najpopularniejsze przepisy</h2>
        <p className='text-zinc-500 text-sm font-normal leading-tight'>
          Najwyżej oceniane przepisy
        </p>
        <hr />
      </div>
      <div className='flex gap-4'>
        <RecipeCard width={250} height={333} />
        <RecipeCard width={250} height={333} />
        <RecipeCard width={250} height={333} />
        <RecipeCard width={250} height={333} />
      </div>
    </section>
  );
}
