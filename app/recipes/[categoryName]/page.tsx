import RecipePreview from '@/components/cards/RecipePreview';
import Navbar from '@/components/navigation/Navbar';
import type { Metadata } from 'next';

type CategoryPageProps = {
  params: {
    categoryName: string;
  };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryName = params.categoryName;

  // optional API call here

  return {
    title: `LunchMate - ${
      categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    }`,
  };
}

const mockRecipe = {
  id: 1,
  name: 'Owsianka z owocami',
  description:
    'Bardzo pyszna i łatwa do zrobienia. Wystarczy wziąć płatki owsiane i trochę owoców',
  created_at: new Date(),
  category_id: 1,
  user_id: 1,
};

export default function CategoryPage({
  params: { categoryName },
}: CategoryPageProps) {
  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 sm:mt-2 p-4 max-w-[1300px]'>
        <h2 className='text-xl sm:text-2xl font-semibold'>
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </h2>
        <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'>
          <RecipePreview recipe={mockRecipe} />
          <RecipePreview recipe={mockRecipe} />
          <RecipePreview recipe={mockRecipe} />
          <RecipePreview recipe={mockRecipe} />
          <RecipePreview recipe={mockRecipe} />
          <RecipePreview recipe={mockRecipe} />
        </div>
      </main>
    </>
  );
}
