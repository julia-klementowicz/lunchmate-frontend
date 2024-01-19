import AddRecipeForm from '@/components/forms/AddRecipeForm';
import Navbar from '@/components/navigation/Navbar';
import fetchCategories from '@/lib/fetchCategories';
import fetchIngredients from '@/lib/fetchIngredients';

export default async function AddPage() {
  const ingredients = await fetchIngredients();
  const categories = await fetchCategories();

  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 flex max-w-[1300px] flex-col gap-4 p-4 text-sm sm:mt-2 sm:text-base'>
        <AddRecipeForm categories={categories} ingredients={ingredients} />
      </main>
    </>
  );
}
