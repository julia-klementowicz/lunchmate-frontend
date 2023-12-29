import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Login() {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='mb-4 mt-8 flex w-full items-center justify-center p-4 md:w-1/2 md:p-8'>
        <div className='max-w-md space-y-4'>
          <h2 className='text-center text-2xl font-bold'>Zaloguj się</h2>

          <p className='text-center text-gray-500'>
            Wprowadź swój adres email i hasło, aby się zalogować
          </p>

          <form>
            <div className='space-y-2'>
              <div>
                <Label htmlFor='login'>Login</Label>
                <Input
                  type='text'
                  id='login'
                  placeholder='example'
                  className='w-full border p-2'
                />
              </div>
              <div>
                <Label htmlFor='password'>Hasło</Label>
                <Input
                  type='password'
                  id='password'
                  placeholder='*******************'
                  className='w-full border p-2'
                />
              </div>
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
