import type { Metadata } from 'next';
import RecipePreview from '@/components/cards/RecipePreview';
import Navbar from '@/components/navigation/Navbar';
import fetchRecipes from '@/lib/fetchRecipes';
import fetchCategories from '@/lib/fetchCategories';

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  // optional API call here
  const categories = await fetchCategories();
  const categoryName = categories.find(
    (category: Category) => category.id.toString() === params.categoryId,
  )?.name;

  return {
    title: `LunchMate - ${categoryName}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const recipes = await fetchRecipes();
  const categories = await fetchCategories();

  const categoryRecipes = recipes.filter(
    (recipe: Recipe) => recipe.categoryId.toString() === params.categoryId,
  );
  const categoryName = categories.find(
    (category: Category) => category.id.toString() === params.categoryId,
  )?.name;

  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 max-w-[1300px] p-4 sm:mt-2'>
        <h2 className='text-xl font-semibold sm:text-2xl'>{categoryName}</h2>
        <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'>
          {categoryRecipes.length > 0 ? (
            categoryRecipes.map((recipe: Recipe) => (
              <RecipePreview key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>Brak przepisów w tej kategorii</p>
          )}
        </div>
      </main>
    </>
  );
}
