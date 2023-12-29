import Image from 'next/image';
import { yellowStyle } from '@/lib/getRatingStars';
import { useState } from 'react';

type StarRatingProps = {
  rating: number;
  setRating: (rating: number) => void;
};

export default function StarRating({ rating, setRating }: StarRatingProps) {
  const [hover, setHover] = useState<null | number>(null);

  return (
    <div className='flex' onMouseLeave={() => setHover(null)}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i;
        return (
          <div key={i} className='flex h-[24px] w-[24px]'>
            <label
              htmlFor={(ratingValue + 0.5).toString()}
              className='flex h-[24px] w-[12px]'
              onMouseOver={() => setHover(ratingValue + 0.5)}
            >
              <Image
                src={
                  ratingValue + 0.5 <= (hover ?? rating!)
                    ? '/stars/rating_full.svg'
                    : '/stars/rating_empty.svg'
                }
                alt='ocena'
                width={12}
                height={24}
                className='object-cover object-left'
                style={{ ...yellowStyle }}
              />
              <input
                type='radio'
                className='hidden'
                value={ratingValue + 0.5}
                id={(ratingValue + 0.5).toString()}
                onClick={() => setRating(hover ?? 5)}
              />
            </label>
            <label
              htmlFor={(ratingValue + 1).toString()}
              className='flex h-[24px] w-[12px]'
              onMouseOver={() => setHover(ratingValue + 1)}
            >
              <Image
                src={
                  ratingValue + 1 <= (hover ?? rating!)
                    ? '/stars/rating_full.svg'
                    : '/stars/rating_empty.svg'
                }
                alt='ocena'
                width={12}
                height={24}
                className='object-cover object-right'
                style={{ ...yellowStyle }}
              />
              <input
                type='radio'
                className='hidden'
                value={ratingValue + 1}
                id={(ratingValue + 1).toString()}
                onClick={() => setRating(hover ?? 5)}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}
