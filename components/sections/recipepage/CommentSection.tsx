'use client';

import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

export default function CommentSection() {
  return (
    <section className='mt-2 flex flex-col gap-4'>
      <h3 className='flex items-center text-2xl font-semibold text-primary-yellow'>
        Komentarze
      </h3>
      <Comment />
      <Comment />
      <Comment />
      <AddCommentForm />
    </section>
  );
}
