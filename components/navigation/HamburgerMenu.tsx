'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <button onClick={toggleDrawer}>
        <Image
          src='/hamburger_menu_icon.svg'
          alt='open mobile menu'
          width={36}
          height={36}
        />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        duration={360}
        style={{ width: '100%' }}
        zIndex={1000}
        lockBackgroundScroll
      >
        <div className='w-full flex flex-col gap-6'>
          <div className='w-full h-14 px-4 py-2 grid grid-cols-3 border-b'>
            <div className=''></div>
            <div className='flex items-center justify-center gap-2'>
              <Image
                src='/logo_icon.svg'
                alt='LunchMate logo'
                width={25}
                height={25}
              />
              <h1 className='font-medium text-2xl'>LunchMate</h1>
            </div>
            <button className='justify-self-end' onClick={toggleDrawer}>
              <Image
                src='/close_icon.svg'
                alt='close mobile menu'
                width={34}
                height={34}
              />
            </button>
          </div>
          <ul className='flex flex-col justify-center items-center gap-4 mt-[2px] text-lg font-medium'>
            <li>
              <Link href='/' onClick={toggleDrawer}>
                Strona główna
              </Link>
            </li>
            <li>
              <Link href='/recipes' onClick={toggleDrawer}>
                Przepisy
              </Link>
            </li>
            <li>
              <Link href='/about' onClick={toggleDrawer}>
                O nas
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}
