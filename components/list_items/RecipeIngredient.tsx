import Image from 'next/image';
import { MouseEventHandler } from 'react';

type RecipeIngredientProps = {
  ingredient: {
    ingridientId: number;
    recipeId: number;
    name: string;
    amount: number;
    unit: string;
  };
  removeFunction?: MouseEventHandler<HTMLButtonElement>;
};

export default function RecipeIngredient({
  ingredient,
  removeFunction,
}: RecipeIngredientProps) {
  return (
    <li className='w-full py-2'>
      <label
        htmlFor={ingredient.name}
        className='grid grid-cols-6 items-center gap-2'
      >
        <input type='checkbox' id={ingredient.name} name={ingredient.name} />
        <span className='col-span-2 capitalize'>{ingredient.name}</span>
        <span className='justify-self-center'>{ingredient.amount}</span>
        <span className='justify-self-center'>{ingredient.unit}</span>

        {typeof removeFunction === 'undefined' ? (
          <button type='button' className='justify-self-end'>
            <Image src='/add_icon.svg' alt='dodaj' width={24} height={24} />
          </button>
        ) : (
          <button
            type='button'
            onClick={removeFunction}
            className='justify-self-end'
          >
            <Image
              src='/add_icon.svg'
              alt='dodaj'
              width={32}
              height={32}
              className='rotate-45'
            />
          </button>
        )}
      </label>
    </li>
  );
}
