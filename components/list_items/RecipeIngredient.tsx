import Image from 'next/image';

export default function RecipeIngredient({ ingredient }: any) {
  return (
    <li className='w-full py-2'>
      <label
        htmlFor={ingredient.name}
        className='grid grid-cols-6 items-center'
      >
        <input type='checkbox' id={ingredient.name} name={ingredient.name} />
        <span className='col-span-2'>{ingredient.name}</span>
        <span className=''>{ingredient.amount}</span>
        <span className='justify-self-end'>{ingredient.amount}</span>
        <button className='justify-self-end'>
          <Image src='/add_icon.svg' alt='dodaj' width={24} height={24} />
        </button>
      </label>
    </li>
  );
}
