import Image from 'next/image';
import Comment from './Comment';

export default function CommentSection() {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='flex items-center text-2xl font-semibold text-primary-yellow'>
        Komentarze
      </h3>
      <Comment />
      <article className='rounded-xl border border-neutral-200 p-4'>
        <h4 className='mb-2 text-lg font-semibold'>Dodaj komentarz</h4>
        <form className='flex gap-2'>
          <textarea
            className='h-12 grow rounded-xl border border-neutral-200 p-2 sm:h-16'
            placeholder='Podziel się swoimi kulinarzymi wrażeniami'
          />
          <button className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary-yellow py-2 text-white opacity-50 sm:h-16 sm:w-16'>
            <Image
              src='/send_icon.svg'
              alt='wyślij'
              width={32}
              height={32}
              className='mr-0.5 h-6 w-6 sm:h-8 sm:w-8'
            />
          </button>
        </form>
      </article>
    </section>
  );
}
