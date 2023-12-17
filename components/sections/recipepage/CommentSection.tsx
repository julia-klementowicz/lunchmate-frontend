import Image from 'next/image';
import Comment from './Comment';

export default function CommentSection() {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-2xl font-semibold text-primary-yellow flex items-center'>
        Komentarze
      </h3>
      <Comment />
      <article className='border border-neutral-200 rounded-xl p-4'>
        <h4 className='text-lg font-semibold mb-2'>Dodaj komentarz</h4>
        <form className='flex gap-2'>
          <textarea
            className='grow border border-neutral-200 rounded-xl p-2 h-12 sm:h-16'
            placeholder='Podziel się swoimi kulinarzymi wrażeniami'
          />
          <button className='h-12 w-12 sm:h-16 sm:w-16 flex justify-center items-center bg-primary-yellow opacity-50 text-white rounded-xl py-2'>
            <Image
              src='/send_icon.svg'
              alt='wyślij'
              width={32}
              height={32}
              className='h-6 w-6 sm:h-8 sm:w-8 mr-0.5'
            />
          </button>
        </form>
      </article>
    </section>
  );
}
