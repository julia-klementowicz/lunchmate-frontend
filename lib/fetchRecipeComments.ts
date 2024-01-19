export default async function fetchRecipeComments(id: string) {
  const recipeCommentsResponse = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/comments/getFromRecipe?recipeId=${id}`,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return recipeCommentsResponse.json();
}
