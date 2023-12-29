import Image from 'next/image';
import RecipeIngredient from '@/components/list_items/RecipeIngredient';
import getDifficulty from '@/lib/getDifficulty';
import getRatingStars from '@/lib/getRatingStars';

export default function RecipeImageIngredientsSection({
  recipe,
  ingredients,
}: any) {
  return (
    <section id='recipe_mid_section' className='gap-8 md:grid md:grid-cols-2'>
      <div id='recipe_icons_and_photo'>
        <div
          id='recipe_icons'
          className='flex items-center justify-between p-4'
        >
          <div
            id='recipe_time'
            className='flex flex-col items-center justify-center'
          >
            <Image
              src='/timer_icon.svg'
              alt='ikona zegara'
              width={24}
              height={24}
            />
            <p>35 min</p>
          </div>
          <div id='recipe_rating' className='flex items-center justify-center'>
            {getRatingStars(3.5)}
          </div>
          <div
            id='recipe_difficulty'
            className='flex flex-col items-center justify-center'
          >
            {getDifficulty('easy')}
          </div>
          <button>
            <Image
              src='/heart_empty.svg'
              width={24}
              height={24}
              alt='Dodaj do ulubionych'
            />
          </button>
        </div>
        <Image
          src='https://kuchniavikinga.pl/wp-content/uploads/2023/01/zdrowe-sniadanie.webp'
          alt={`Obraz przedstawiający ${recipe.name}`}
          className='w-full rounded-md object-cover'
          style={{ aspectRatio: '4/3' }}
          width={600}
          height={450}
        />
      </div>
      <div id='recipe_ingredients' className='flex flex-col'>
        <h3 className='flex h-20 items-center text-2xl font-semibold'>
          Składniki
        </h3>
        <ul className=''>
          {ingredients.map((ingredient: any) => (
            <RecipeIngredient key={ingredient.name} ingredient={ingredient} />
          ))}
        </ul>
      </div>
    </section>
  );
}
