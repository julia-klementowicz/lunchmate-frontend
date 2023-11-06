import Image from 'next/image';

const mockSrc =
  'https://blog.dietly.pl/wp-content/uploads/2019/12/losos-w-sosie-pomaranczowym_Easy-Resize.com_-682x1024.jpg';

type RecipeCardProps = {
  width: number;
  height: number;
};

export default function RecipeCard({ width, height }: RecipeCardProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Image
        src={mockSrc}
        alt='mock image'
        width={width}
        height={height}
        className='rounded-md object-cover'
        style={{ width: width, height: height }}
      />
      <p className='text-base font-medium'>Fajny łosoś</p>
      <p className='-mt-1.5 text-zinc-500 text-sm'>Julia</p>
    </div>
  );
}
