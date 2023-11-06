import RecipeCard from "../cards/RecipeCard";

export default function LastAddedSection() {
  return (
    <section className='w-full mt-10 mb-16 flex flex-col'>
      <div className='mb-4 flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>Ostatnio dodane przepisy</h2>
        <p className='text-zinc-500 text-sm font-normal leading-tight'>
          Najnowsze przepisy
        </p>
        <hr />
      </div>
      <div className='flex gap-4'>
        <RecipeCard width={150} height={150} />
        <RecipeCard width={150} height={150} />
        <RecipeCard width={150} height={150} />
        <RecipeCard width={150} height={150} />
      </div>
    </section>
  )
}