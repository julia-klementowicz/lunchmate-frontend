export default async function fetchRecipe(recipeId: string) {
  const recipeResponse = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/recipes/${recipeId}`,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!recipeResponse.ok) {
    return null;
  }
  return recipeResponse.json();
}
