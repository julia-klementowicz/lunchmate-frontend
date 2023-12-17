export default function RecipeTitleDateSection({ recipe }: any) {
  return (
    <section
      id='recipe_title_date_bar'
      className='flex items-center justify-between sm:items-end'
    >
      <div
        id='recipe_title_author'
        className='flex flex-col sm:flex-row sm:items-end sm:gap-8'
      >
        <h2 id='recipe_title' className='text-xl font-semibold sm:text-2xl'>
          {recipe.name}
        </h2>
        <p className=''>autor: John Doe</p>
      </div>
      <p id='recipe_date' className=''>
        dodano: 23.10.2023
      </p>
    </section>
  );
}
