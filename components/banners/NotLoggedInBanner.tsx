import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function NotLoggedInBanner() {
  return (
    <div className='w-full h-[250px] lg:h-[350px] relative'>
      <Image
        src='/not_logged_in_banner.png'
        alt='banner'
        fill
        objectFit='cover'
        className='rounded-lg'
      />
      <div className='absolute left-0 top-0 w-full h-full flex items-center p-8 bg-black bg-opacity-30 rounded-lg'>
        <div className='md:w-7/12 lg:w-6/12 xl:w-4/12 max-h-max flex flex-col gap-4'>
          <p className='text-justify text-white text-sm md:text-base xl:text-lg'>
            Witaj w świecie kulinarnej pasji! Czy marzysz o odkrywaniu nowych
            smaków, dzieleniu się swoimi ulubionymi przepisami i zdobywaniu
            inspiracji od innych miłośników kuchni? Dołącz już teraz i stań się
            częścią społeczności, gdzie kulinaria staje się sztuką! Zarejestruj
            się na <span className='font-bold'>LunchMate</span> i rozpocznij
            swoją kulinarową podróż już dzisiaj. Smacznego!
          </p>
          <Link href='/register' className='h-8 w-64 m-auto'>
            <Button className='bg-yellow-400 w-full h-full'>
              Załóż konto
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
