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
      <header className='w-full h-14 px-4 hidden sm:flex justify-between items-center border-b border-neutral-200'>
        <div className='flex gap-2 w-2/12 lg:w-3/12 max-w-[300px]'>
          <Image
            src='/logo_icon.svg'
            alt='LunchMate logo'
            width={25}
            height={25}
          />
          <h1 className='font-medium text-[22px]'>LunchMate</h1>
        </div>
        <ul className='hidden sm:flex justify-center items-center gap-8 mt-[2px] text-lg font-medium'>
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
        <div className='w-2/12 lg:w-3/12 max-w-[300px]'>
          <Input type='text' placeholder='Szukaj...' className='h-9' />
        </div>
      </header>
      <header className='w-full h-14 px-4 flex sm:hidden justify-between items-center border-b border-neutral-200'>
        <div className='w-2/12 flex items-center'>
          <HamburgerMenu />
        </div>
        <div className='flex items-center justify-center gap-2 w-4/12'>
          <Image
            src='/logo_icon.svg'
            alt='LunchMate logo'
            width={25}
            height={25}
          />
          <h1 className='font-medium text-[22px]'>LunchMate</h1>
        </div>
        <div className='w-2/12 flex items justify-end relative'>
          <button onClick={() => setShowSearch(!showSearch)}>
            <Image src='/search_icon.svg' alt='search' width={30} height={30} />
          </button>
          <div className='absolute top-[44px] -right-2 z-10'>
            <Input
              type='text'
              placeholder='Szukaj...'
              className={`w-[200px] ${
                showSearch ? '' : 'p-0 border-0 h-0'
              } transition-all duration-200`}
            />
          </div>
        </div>
      </header>
    </>
  );
}
