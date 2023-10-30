import Link from 'next/link';
import Image from 'next/image';
import { Input } from '../ui/input';

export default function Navbar() {
  return (
    <header className='w-full h-14 px-4 flex justify-between items-center border-b border-neutral-200'>
      <div className='flex gap-2 w-2/12 lg:w-3/12 max-w-[300px]'>
        <Image src='/logo_icon.svg' alt='LunchMate logo' width={25} height={25} />
        <h1 className='font-medium text-xl'>LunchMate</h1>
      </div>
      <ul className='flex justify-center items-center gap-8 mt-[2px] font-medium'>
        <li>
          <Link href='/'>Strona główna</Link>
        </li>
        <li>
          <Link href='/'>Przepisy</Link>
        </li>
        <li>
          <Link href='/about'>O nas</Link>
        </li>
      </ul>
      <div className='w-2/12 lg:w-3/12 max-w-[300px]'>
        <Input type='text' placeholder='Szukaj...' className='h-9' />
      </div>
    </header>
  );
}
