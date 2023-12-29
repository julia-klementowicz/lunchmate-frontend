'use client';

import RecipeCard from '../../cards/RecipeCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  mobile: {
    breakpoint: { min: 0, max: 640 },
    items: 2,
  },
  sm: {
    breakpoint: { min: 640, max: 768 },
    items: 3,
  },
  md: {
    breakpoint: { min: 768, max: 1024 },
    items: 3,
  },
  lg: {
    breakpoint: { min: 1024, max: 1280 },
    items: 4,
  },
  xl: {
    breakpoint: { min: 1280, max: 10000 },
    items: 5,
  },
};

export default function MostPopularSection() {
  return (
    <section className='mb-16 mt-10 flex w-full flex-col'>
      <div className='mb-4 flex flex-col gap-4'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          Najpopularniejsze przepisy
        </h2>
        <p className='text-sm font-normal leading-tight text-zinc-500 sm:text-base'>
          Najwyżej oceniane przepisy
        </p>
        <hr />
      </div>
      <Carousel responsive={responsive}>
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
        <RecipeCard type='large' />
      </Carousel>
    </section>
  );
}
