import { useState } from 'react';
import Image from 'next/image';
import StarRating from './StarRating';

export default function AddCommentForm() {
  const [rating, setRating] = useState(5);

  return (
    <form className='flex flex-col gap-2 rounded-xl border border-neutral-200 p-4'>
      <h4 className='mb-2 text-lg font-semibold'>Dodaj komentarz</h4>
      <div className='flex gap-2'>
        <textarea
          className='h-12 grow rounded-xl border border-neutral-200 p-2 sm:h-16'
          placeholder='Podziel się swoimi kulinarnymi wrażeniami'
        />
        <button className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary-yellow py-2 text-white opacity-50 sm:h-16 sm:w-16'>
          <Image
            src='/send_icon.svg'
            alt='wyślij'
            width={32}
            height={32}
            className='mr-0.5 h-5 w-5 sm:h-7 sm:w-7'
          />
        </button>
      </div>
      <div className='mt-1 flex items-center gap-2'>
        <p>Twoja ocena: </p>
        <StarRating rating={rating} setRating={setRating} />
      </div>
    </form>
  );
}
