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
          className='rounded-t-lg w-full h-full object-cover'
          style={{ aspectRatio: '16/9' }}
        />
      </div>
      <div className='p-3 flex flex-col gap-1'>
        <p className='text-base sm:text-lg font-medium'>{name}</p>
        <p className='text-sm sm:text-base'>
          {description.substring(0, 80)}
          {description.length > 80 && '...'}
        </p>
        <div className='mt-2 mb-0.5 grid grid-cols-4 text-sm sm:text-base'>
          <div className='flex flex-col items-center'>
            <Image
              src='/timer_icon.svg'
              alt='ikona zegara'
              width={24}
              height={24}
            />
            <p>35 min</p>
          </div>
          <div className='-mt-1 col-span-2 w-full flex justify-center items-center'>
            {getRatingStars(3.5)}
          </div>
          <div className='flex flex-col justify-center items-center'>
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
