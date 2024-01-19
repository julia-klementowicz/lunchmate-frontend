'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError('');
    const response = await fetch(
      'https://lunchmate-backend-production.up.railway.app/api/auth/signin',
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      // save response accessToken and username to localStorage
      localStorage.setItem('user', JSON.stringify(data));

      // redirect to home page
      router.push('/');
    } else {
      if (response.headers.get('Content-Type')?.includes('application/json')) {
        const data = await response.json();
        setServerError(data.message);
      } else {
        setServerError('Niepoprawny login lub hasło');
      }
    }
  };

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='mb-4 mt-8 flex w-full items-center justify-center p-4 md:w-1/2 md:p-8'>
        <div className='max-w-md space-y-4'>
          <h2 className='text-center text-2xl font-bold'>Zaloguj się</h2>

          <p className='text-center text-gray-500'>
            Wprowadź swój adres email i hasło, aby się zalogować
          </p>

          <form onSubmit={onSubmit}>
            <div className='space-y-2'>
              <div>
                <Label htmlFor='login'>Login</Label>
                <Input
                  type='text'
                  id='login'
                  placeholder='example'
                  className='w-full border p-2'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor='password'>Hasło</Label>
                <Input
                  type='password'
                  id='password'
                  placeholder='*******************'
                  className='w-full border p-2'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {serverError && (
                <p className='text-right text-xs text-red-500'>{serverError}</p>
              )}
              <Button className='mb-2.5 w-full rounded bg-primary-yellow py-2 text-black'>
                Zaloguj się
              </Button>
              <div className='flex items-center justify-center space-x-4'>
                <div className='flex-1 border-b'></div>
                <div className='text-gray-400'>Nie masz jeszcze konta?</div>
                <div className='flex-1 border-b'></div>
              </div>
              <Link href='/register'>
                <Button
                  variant='outline'
                  className='mt-2.5 w-full rounded py-2 text-black'
                >
                  Załóż konto
                </Button>
              </Link>
            </div>
          </form>

          <p className='mb-2 mt-4 text-center text-gray-500'>
            Kontynuując zgadzasz się na
            <Link
              href='https://pl.wikipedia.org/wiki/Regulamin'
              className='underline'
            >
              {' '}
              Regulamin{' '}
            </Link>
            i
            <Link
              href='https://pl.wikipedia.org/wiki/Polityka_prywatno%C5%9ci'
              className='underline'
            >
              {' '}
              Politykę prywatności
            </Link>
          </p>
        </div>
      </div>

      <div className='relative hidden md:block md:w-1/2'>
        <Image
          src='/login_image.webp'
          alt='banner'
          layout='fill'
          objectFit='cover'
          className='rounded-none'
        />
      </div>
    </div>
  );
}
