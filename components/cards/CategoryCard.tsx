import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  label: string;
  imageLink: string;
};

export default function CategoryCard({ label, imageLink }: CategoryCardProps) {
  return (
    <Link href='/recipes/breakfast' className='relative rounded-lg'>
      <Image
        src={imageLink}
        alt='image'
        width={500}
        height={500}
        className='h-full w-full rounded-lg object-cover'
        style={{ aspectRatio: '3/4' }}
      />
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
        <h3 className='w-full bg-white bg-opacity-70 py-1 text-center text-xl font-semibold leading-loose lg:text-2xl lg:leading-loose'>
          {label}
        </h3>
      </div>
    </Link>
  );
}
