import type { Metadata } from 'next';
import Navbar from '@/components/navigation/Navbar';
import RecipeTitleDateSection from '@/components/sections/recipepage/RecipeTitleDateSection';
import RecipeImageIngredientsSection from '@/components/sections/recipepage/RecipeImageIngredientsSection';
import CommentSection from '@/components/sections/recipepage/CommentSection';
import fetchRecipe from '@/lib/fetchRecipe';
import fetchRecipeComments from '@/lib/fetchRecipeComments';

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
  const recipe = await fetchRecipe(recipeId);
  const recipeName = recipe?.name ? recipe.name : null;

  return {
    title: `LunchMate - ${recipeName || 'Nie znaleziono przepisu'}`,
  };
}

export default async function RecipeView({
  params: { recipeId },
}: RecipeViewProps) {
  const recipe = await fetchRecipe(recipeId);
  const comments = await fetchRecipeComments(recipeId);

  if (recipe === null) {
    return (
      <>
        <Navbar />
        <main className='m-auto mt-1 flex max-w-[1300px] flex-col gap-4 p-4 text-sm sm:mt-2 sm:text-base'>
          <h1 className='text-center text-2xl font-semibold'>
            Nie znaleziono przepisu
          </h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 flex max-w-[1300px] flex-col gap-4 p-4 text-sm sm:mt-2 sm:text-base'>
        <RecipeTitleDateSection recipe={recipe} />
        <RecipeImageIngredientsSection recipe={recipe} />
        <section>
          <h3 className='my-4 flex items-center text-2xl font-semibold text-primary-yellow'>
            Opis wykonania
          </h3>
          <p>{recipe.description}</p>
        </section>
        <CommentSection comments={comments} recipeId={recipeId} />
      </main>
    </>
  );
}
