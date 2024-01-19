import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import StarRating from './StarRating';

export default function AddCommentForm({ recipeId, addComment }: any) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const router = useRouter();

  async function postComment(e) {
    e.preventDefault();
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
      return;
    }
    const userId = JSON.parse(user).id;
    const accessToken = JSON.parse(user).accessToken;

    const newComment = {
      author: userId,
      recipe: recipeId,
      title,
      description,
    };

    const response = await fetch(
      `https://lunchmate-backend-production.up.railway.app/api/comments/create?recipeId=${recipeId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newComment),
      },
    );

    const data = await response.json();

    addComment(newComment);
    setTitle('');
    setDescription('');
  }

  return (
    <form
      onSubmit={postComment}
      className='flex flex-col gap-2 rounded-xl border border-neutral-200 p-4'
    >
      <h4 className='mb-2 text-lg font-semibold'>Dodaj komentarz</h4>
      <input
        disabled={
          typeof localStorage === 'undefined' || !localStorage.getItem('user')
        }
        className='mr-14 h-10 rounded-xl border border-neutral-200 p-2 disabled:cursor-not-allowed sm:mr-[72px]'
        placeholder='Tytuł'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <div className='flex gap-2'>
        <textarea
          disabled={
            typeof localStorage === 'undefined' || !localStorage.getItem('user')
          }
          className='h-12 grow rounded-xl border border-neutral-200 p-2 disabled:cursor-not-allowed sm:h-16'
          placeholder='Podziel się swoimi kulinarnymi wrażeniami'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          disabled={!title || !description}
          className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary-yellow py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 sm:h-16 sm:w-16'
        >
          <Image
            src='/send_icon.svg'
            alt='wyślij'
            width={32}
            height={32}
            className='mr-0.5 h-5 w-5 sm:h-7 sm:w-7'
          />
        </button>
      </div>
      {/* <div className='mt-1 flex items-center gap-2'>
        <p>Twoja ocena: </p>
        <StarRating rating={rating} setRating={setRating} />
      </div> */}
    </form>
  );
}
