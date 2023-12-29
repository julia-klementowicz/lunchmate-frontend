import getRatingStars from '@/lib/getRatingStars';

export default function Comment() {
  return (
    <article className='flex flex-col gap-2 rounded-xl border border-neutral-200 p-4'>
      <div className='grid grid-cols-3 items-center'>
        <h4 className='text-lg font-semibold'>John Doe</h4>
        <p className='flex justify-self-center'>
          {getRatingStars(3.5, 16, true)}
        </p>
      </div>
      <p className='text-justify text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, voluptatum, quae, voluptates voluptatem quia quos
        exercitationem quibusdam quidem fugit officiis. Quisquam voluptas,
        voluptatum, quae, voluptates voluptatem quia quos exercitationem
        quibusdam quidem fugit officiis.
      </p>
    </article>
  );
}
