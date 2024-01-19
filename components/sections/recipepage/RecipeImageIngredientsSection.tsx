'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RecipeIngredient from '@/components/list_items/RecipeIngredient';
import getDifficulty from '@/lib/getDifficulty';

export default function RecipeImageIngredientsSection({
  recipe,
}: {
  recipe: Recipe;
}) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const localLikedRecipes = localStorage.getItem('likedRecipes');
    const user = localStorage.getItem('user');
    if (localLikedRecipes && user) {
      setIsLiked(JSON.parse(localLikedRecipes).includes(recipe.id));
    }
    // setIsLoaded(true);
  }, [recipe.id]);

  if (!isLoaded) return null;

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
            <p>{recipe.time} min</p>
          </div>
          <div
            id='recipe_difficulty'
            className='flex flex-col items-center justify-center'
          >
            {getDifficulty(recipe.difficulty)}
          </div>
          {isLiked ? (
            <button
              className='flex flex-col items-center justify-center'
              disabled={
                typeof localStorage !== 'undefined' &&
                localStorage.getItem('user') === null
              }
              onClick={() => {
                setIsLiked((prev: boolean) => !prev);
                const localLikedRecipes = localStorage.getItem('likedRecipes');
                if (localLikedRecipes) {
                  localStorage.setItem(
                    'likedRecipes',
                    JSON.stringify(
                      JSON.parse(localLikedRecipes).filter(
                        (id: number) => id !== recipe.id,
                      ),
                    ),
                  );
                }
              }}
            >
              <Image
                src='/heart_full.svg'
                width={24}
                height={24}
                alt='Dodaj do ulubionych'
              />
              <p>{recipe.likesCount + 1}</p>
            </button>
          ) : (
            <button
              className='flex flex-col items-center justify-center'
              disabled={
                typeof localStorage !== 'undefined' &&
                localStorage.getItem('user') === null
              }
              onClick={() => {
                setIsLiked((prev: boolean) => !prev);
                const localLikedRecipes = localStorage.getItem('likedRecipes');
                if (localLikedRecipes) {
                  localStorage.setItem(
                    'likedRecipes',
                    JSON.stringify([
                      ...JSON.parse(localLikedRecipes),
                      recipe.id,
                    ]),
                  );
                } else {
                  localStorage.setItem(
                    'likedRecipes',
                    JSON.stringify([recipe.id]),
                  );
                }
              }}
            >
              <Image
                src='/heart_empty.svg'
                width={24}
                height={24}
                alt='Dodaj do ulubionych'
              />
              <p>{recipe.likesCount}</p>
            </button>
          )}
        </div>
        <Image
          src={recipe.image}
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
          {recipe.ingridients.map((ingredient: any) => (
            <RecipeIngredient key={ingredient.name} ingredient={ingredient} />
          ))}
        </ul>
      </div>
    </section>
  );
}
