'use client';

import { useState } from 'react';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

export default function CommentSection({ comments, recipeId }: any) {
  const [viewableComments, setViewableComments] = useState<any[]>(comments);

  function addViewableComment(comment: any) {
    setViewableComments([...viewableComments, comment]);
  }

  return (
    <section className='mt-2 flex flex-col gap-4'>
      <h3 className='flex items-center text-2xl font-semibold text-primary-yellow'>
        Komentarze
      </h3>
      {comments.length === 0 && (
        <p className='text-sm font-normal leading-tight text-zinc-500 sm:text-base'>
          Brak komentarzy
        </p>
      )}
      {viewableComments.map((comment: any) => (
        <Comment key={comment.description} comment={comment} />
      ))}
      <AddCommentForm recipeId={recipeId} addComment={addViewableComment} />
    </section>
  );
}
