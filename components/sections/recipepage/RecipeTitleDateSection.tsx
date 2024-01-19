export default async function RecipeTitleDateSection({ recipe }: any) {
  const author = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/user/getUserById?id=${recipe.userId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => res.json());

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
        <p className='mb-[2px]'>autor: {author.name}</p>
      </div>
      <p id='recipe_date' className=''>
        {/* dodano: 23.10.2023 */}
      </p>
    </section>
  );
}
