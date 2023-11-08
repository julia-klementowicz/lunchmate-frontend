import Image from 'next/image';
import Link from 'next/link';

const mockSrc =
  'https://blog.dietly.pl/wp-content/uploads/2019/12/losos-w-sosie-pomaranczowym_Easy-Resize.com_-682x1024.jpg';

type RecipeCardProps = {
  type?: 'small' | 'large';
};

export default function RecipeCard({ type }: RecipeCardProps) {
  return (
    <Link href='#' className='flex flex-col gap-2 mx-2'>
      <Image
        src={mockSrc}
        alt='mock image'
        width={type === 'large' ? 240 : 190}
        height={type === 'large' ? 300 : 250}
        sizes='100vw'
        className={`rounded-md object-cover w-full ${
          type === 'small' && 'h-[150px] min-[460px]:h-[200px] sm:h-[250px]'
        } ${
          type === 'large' && 'h-[250px] min-[460px]:h-[300px] sm:h-[333px]'
        }`}
      />
      <p className='text-base font-medium'>Fajny łosoś</p>
      <p className='-mt-1.5 text-zinc-500 text-sm'>Julia</p>
    </Link>
  );
}
