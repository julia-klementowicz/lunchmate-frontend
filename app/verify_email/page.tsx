import Link from 'next/link';
import Image from 'next/image';

export default function VerifyEmailPage() {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-6 sm:py-12'>
      <div className='max-w-xl px-5 text-center'>
        <h1 className='mb-12 mr-4 flex items-center justify-center gap-6 text-5xl font-bold text-zinc-800'>
          <Image src='/logo_icon.svg' width={60} height={60} alt='Logo' />
          <span>LunchMate</span>
        </h1>
        <h2 className='mb-2 text-3xl font-bold text-zinc-800'>
          Zweryfikuj swój adres email
        </h2>
        <p className='mb-2 text-lg text-zinc-500'>
          Dziękujemy za rejestrację. Na twoją skrzynkę wysłaliśmy wiadomość z
          linkiem aktywacyjnym
        </p>
        <Link
          href='/login'
          className='mt-3 inline-block w-96 rounded bg-yellow-400 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-yellow-500'
        >
          Przejdź do strony logowania →
        </Link>
      </div>
    </div>
  );
}
