'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function NotLoggedInBanner() {
  const [user, setUser] = useState<User | boolean>(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(false);
    }
  }, []);

  if (user) {
    return (
      <Link
        href='/add'
        className='inline-flex h-9 w-56 items-end justify-center gap-1 rounded-md bg-yellow-400 px-12 py-2 shadow'
      >
        <div className='relative flex h-4 w-4 flex-col items-start justify-start' />
        <div className='text-center text-base font-medium leading-tight text-zinc-950'>
          Dodaj przepis
        </div>
      </Link>
    );
  }

  return (
    <div className='relative h-[250px] w-full lg:h-[350px]'>
      <Image
        src='/homepage_banner.webp'
        alt='banner'
        width={1300}
        height={350}
        sizes='100vw'
        className='h-[250px] w-full rounded-lg object-cover lg:h-[350px]'
      />
      <div className='absolute left-0 top-0 flex h-full w-full items-center rounded-lg bg-black bg-opacity-30 p-8'>
        <div className='flex max-h-max flex-col gap-4 md:w-7/12 lg:w-6/12 xl:w-4/12'>
          <p className='text-justify text-sm text-white md:text-base xl:text-lg'>
            Witaj w świecie kulinarnej pasji! Czy marzysz o odkrywaniu nowych
            smaków, dzieleniu się swoimi ulubionymi przepisami i zdobywaniu
            inspiracji od innych miłośników kuchni? Dołącz już teraz i stań się
            częścią społeczności, gdzie kulinaria staje się sztuką! Zarejestruj
            się na <span className='font-bold'>LunchMate</span> i rozpocznij
            swoją kulinarową podróż już dzisiaj. Smacznego!
          </p>
          <Link href='/register' className='m-auto h-8 w-64'>
            <Button className='h-full w-full bg-yellow-400'>Załóż konto</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
