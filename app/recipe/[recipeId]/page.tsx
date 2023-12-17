import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';
import getRatingStars from '@/lib/getRatingStars';
import getDifficulty from '@/lib/getDifficulty';
import RecipeIngredient from '@/components/list_items/RecipeIngredient';
import RecipeTitleDateSection from '@/components/sections/recipepage/RecipeTitleDateSection';
import RecipeImageIngredientsSection from '@/components/sections/recipepage/RecipeImageIngredientsSection';
import CommentSection from '@/components/sections/recipepage/CommentSection';

const mockRecipe = {
  id: 1,
  name: 'Owsianka z owocami',
  description:
    'Bardzo pyszna i łatwa do zrobienia. Wystarczy wziąć płatki owsiane i trochę owoców',
  created_at: new Date(),
  category_id: 1,
  user_id: 1,
};

const mockIngredients = [
  { name: 'Owsianka', amount: '100 g' },
  { name: 'Mleko', amount: '200 ml' },
  { name: 'Banan', amount: '1 szt.' },
  { name: 'Truskawki', amount: '6 szt.' },
];

const mockCategory = {
  id: 1,
  name: 'Śniadanie',
};

type RecipeViewProps = {
  params: {
    recipeId: string;
  };
};

export async function generateMetadata({
  params,
}: RecipeViewProps): Promise<Metadata> {
  const recipeId = params.recipeId;

  // optional API call here

  return {
    title: `LunchMate - ${mockRecipe.name}`,
  };
}

export default function RecipeView({ params: { recipeId } }: RecipeViewProps) {
  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 flex max-w-[1300px] flex-col gap-4 p-4 text-sm sm:mt-2 sm:text-base'>
        <RecipeTitleDateSection recipe={mockRecipe} />
        <RecipeImageIngredientsSection
          recipe={mockRecipe}
          ingredients={mockIngredients}
        />
        <section>
          <h3 className='my-4 flex items-center text-2xl font-semibold text-primary-yellow'>
            Opis wynonania
          </h3>
          <p>{mockRecipe.description}</p>
        </section>
        <CommentSection />
      </main>
    </>
  );
}
