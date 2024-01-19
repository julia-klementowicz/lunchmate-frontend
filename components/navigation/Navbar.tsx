'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '../ui/input';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(user);
    }
  }, [user]);
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
        <div className='flex max-w-[300px] shrink items-center justify-center gap-2'>
          <Input type='text' placeholder='Szukaj...' className='h-9' />
          {user && (
            <>
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className='flex min-h-[32px] min-w-[32px] grow items-center justify-center rounded-full border-2 border-neutral-700 text-xl font-semibold text-neutral-700'
              >
                {JSON.parse(user).username[0].toUpperCase()}
              </button>
              {showMenu && (
                <div className='absolute right-1 top-[52px] inline-flex w-40 flex-col items-start justify-start gap-2.5 rounded bg-white py-6 shadow'>
                  <Link
                    href='/'
                    className='inline-flex h-5 items-center justify-start gap-2.5 self-stretch px-5 text-sm font-medium leading-none text-zinc-500'
                  >
                    Mój profil
                  </Link>
                  <Link
                    href='/'
                    className='inline-flex h-5 items-center justify-start gap-2.5 self-stretch px-5 text-sm font-medium leading-none text-zinc-500'
                  >
                    Zmień hasło
                  </Link>
                  <Link
                    href='/'
                    className='inline-flex h-5 items-center justify-start gap-2.5 self-stretch px-5 text-sm font-medium leading-none text-zinc-500'
                  >
                    Zmień nazwę
                  </Link>
                  <Link
                    href='/'
                    className='inline-flex h-5 items-center justify-start gap-2.5 self-stretch px-5 text-sm font-medium leading-none text-zinc-500'
                  >
                    Usuń konto
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('user');
                      window.location.href = '/';
                    }}
                    className='inline-flex h-5 items-center justify-start gap-2.5 self-stretch px-5 text-sm font-medium leading-none text-zinc-500'
                  >
                    Wyloguj się
                  </button>
                </div>
              )}
            </>
          )}
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
          {user && (
            <button className='ml-2 flex min-h-[32px] min-w-[32px] max-w-[32px] grow items-center justify-center rounded-full border-2 border-neutral-700 text-xl font-semibold text-neutral-700'>
              {JSON.parse(user).username[0].toUpperCase()}
            </button>
          )}
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
