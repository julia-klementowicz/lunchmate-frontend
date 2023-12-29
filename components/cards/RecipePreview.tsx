import Link from 'next/link';
import Image from 'next/image';
import getRatingStars from '@/lib/getRatingStars';

type RecipePreviewProps = {
  recipe: {
    id: number;
    name: string;
    description: string;
    created_at: any;
    category_id: number;
    user_id: number;
  };
};

export default function RecipePreview({
  recipe: { id, name, description },
}: RecipePreviewProps) {
  return (
    <Link
      href={`/recipe/${id}`}
      className='rounded-lg border border-neutral-300'
    >
      <div className='w-full'>
        <Image
          src='https://kuchniavikinga.pl/wp-content/uploads/2023/01/zdrowe-sniadanie.webp'
          alt={`Obraz przedstawiający ${name}`}
          width={300}
          height={200}
          className='h-full w-full rounded-t-lg object-cover'
          style={{ aspectRatio: '16/9' }}
        />
      </div>
      <div className='flex flex-col gap-1 p-3'>
        <p className='text-base font-medium sm:text-lg'>{name}</p>
        <p className='text-sm sm:text-base'>
          {description.substring(0, 80)}
          {description.length > 80 && '...'}
        </p>
        <div className='mb-0.5 mt-2 grid grid-cols-4 text-sm sm:text-base'>
          <div className='flex flex-col items-center'>
            <Image
              src='/timer_icon.svg'
              alt='ikona zegara'
              width={24}
              height={24}
            />
            <p>35 min</p>
          </div>
          <div className='col-span-2 -mt-1 flex w-full items-center justify-center'>
            {getRatingStars(3.5)}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/difficulty/easy_difficulty.svg'
              alt='trudność'
              width={29}
              height={24}
            />
            <p>Łatwy</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
