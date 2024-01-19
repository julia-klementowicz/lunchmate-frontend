import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fetchUser from '@/lib/fetchUser';

const mockSrc =
  'https://blog.dietly.pl/wp-content/uploads/2019/12/losos-w-sosie-pomaranczowym_Easy-Resize.com_-682x1024.jpg';

type RecipeCardProps = {
  type?: 'small' | 'large';
  recipe: Recipe;
};

export default function RecipeCard({ type, recipe }: RecipeCardProps) {
  const [authorName, setAuthorName] = useState<string>('');

  useEffect(() => {
    async function getUserName() {
      const user = await fetchUser(recipe.userId);
      setAuthorName(user.name);
    }
    getUserName();
  }, [recipe.userId]);
  return (
    <Link href={`/recipe/${recipe.id}`} className='mx-2 flex flex-col gap-2'>
      <Image
        src={recipe.image}
        alt={`Obraz przedstawiający ${recipe.name}`}
        width={300}
        height={400}
        className={`w-full rounded-md object-cover ${
          type === 'small' && 'h-[150px] min-[460px]:h-[200px] sm:h-[250px]'
        } ${
          type === 'large' && 'h-[250px] min-[460px]:h-[300px] sm:h-[333px]'
        }`}
      />
      <p className='text-base font-medium'>{recipe.name}</p>
      <p className='-mt-1.5 text-sm text-zinc-500'>
        {authorName ? authorName : '.....'}
      </p>
    </Link>
  );
}
