import { useState, useEffect } from 'react';
import fetchUser from '@/lib/fetchUser';

export default function Comment({ comment }: any) {
  const [authorName, setAuthorName] = useState<string>('');

  useEffect(() => {
    async function getUserName() {
      const user = await fetchUser(comment.author.toString());
      setAuthorName(user.name);
    }
    getUserName();
  }, [comment.author]);

  return (
    <article className='flex flex-col gap-2 rounded-xl border border-neutral-200 p-4'>
      <h4 className='text-lg font-bold'>{authorName}</h4>
      <h5 className='font-medium'>{comment.title}</h5>
      <p className='text-justify text-sm'>{comment.description}</p>
    </article>
  );
}
