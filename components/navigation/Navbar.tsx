'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '../ui/input';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <header className='hidden h-14 w-full items-center justify-between border-b border-neutral-200 px-4 sm:flex'>
        <Link href='/' className='flex w-2/12 max-w-[300px] gap-2 lg:w-3/12'>
          <Image
            src='/logo_icon.svg'
            alt='LunchMate logo'
            width={25}
            height={25}
          />
          <h1 className='text-[22px] font-medium'>LunchMate</h1>
        </Link>
        <ul className='mt-[2px] hidden items-center justify-center gap-8 text-lg font-medium sm:flex'>
          <li>
            <Link href='/'>Strona główna</Link>
          </li>
          <li>
            <Link href='/recipes'>Przepisy</Link>
          </li>
          <li>
            <Link href='/about'>O nas</Link>
          </li>
        </ul>
        <div className='w-2/12 max-w-[300px] lg:w-3/12'>
          <Input type='text' placeholder='Szukaj...' className='h-9' />
        </div>
      </header>
      <header className='flex h-14 w-full items-center justify-between border-b border-neutral-200 px-4 sm:hidden'>
        <div className='flex w-2/12 items-center'>
          <HamburgerMenu />
        </div>
        <div className='flex w-4/12 items-center justify-center gap-2'>
          <Image
            src='/logo_icon.svg'
            alt='LunchMate logo'
            width={25}
            height={25}
          />
          <h1 className='text-[22px] font-medium'>LunchMate</h1>
        </div>
        <div className='items relative flex w-2/12 justify-end'>
          <button onClick={() => setShowSearch(!showSearch)}>
            <Image src='/search_icon.svg' alt='search' width={30} height={30} />
          </button>
          <div className='absolute -right-2 top-[44px] z-10'>
            <Input
              type='text'
              placeholder='Szukaj...'
              className={`w-[200px] ${
                showSearch ? '' : 'h-0 border-0 p-0'
              } transition-all duration-200`}
            />
          </div>
        </div>
      </header>
    </>
  );
}
