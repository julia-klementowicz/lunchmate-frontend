import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  label: string;
  imageLink: string;
};

export default function CategoryCard({ label, imageLink }: CategoryCardProps) {
  return (
    <Link href='/' className='relative rounded-lg'>
      <Image
        src={imageLink}
        alt='image'
        width={500}
        height={500}
        className='rounded-lg w-full h-full object-cover'
        style={{ aspectRatio: '3/4' }}
      />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
        <h3 className='w-full py-1 text-center bg-white bg-opacity-70 text-xl lg:text-2xl font-semibold leading-loose lg:leading-loose'>
          {label}
        </h3>
      </div>
    </Link>
  );
}
