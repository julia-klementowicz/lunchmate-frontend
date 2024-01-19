'use client';

import RecipeCard from '../../cards/RecipeCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  mobile: {
    breakpoint: { min: 0, max: 640 },
    items: 3,
  },
  sm: {
    breakpoint: { min: 640, max: 768 },
    items: 4,
  },
  md: {
    breakpoint: { min: 768, max: 1024 },
    items: 4,
  },
  lg: {
    breakpoint: { min: 1024, max: 1280 },
    items: 5,
  },
  xl: {
    breakpoint: { min: 1280, max: 10000 },
    items: 6,
  },
};

type LastAddedSectionProps = {
  recipes: Recipe[];
};

export default function LastAddedSection({ recipes }: LastAddedSectionProps) {
  return (
    <section className='mb-16 mt-10 flex w-full flex-col'>
      <div className='mb-4 flex flex-col gap-4'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          Ostatnio dodane przepisy
        </h2>
        <p className='text-sm font-normal leading-tight text-zinc-500 sm:text-base'>
          Najnowsze przepisy
        </p>
        <hr />
      </div>
      <Carousel responsive={responsive}>
        {recipes
          .slice(0)
          .reverse()
          .map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} type='small' recipe={recipe} />
          ))}
      </Carousel>
    </section>
  );
}
