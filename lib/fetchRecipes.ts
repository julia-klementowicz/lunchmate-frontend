export default async function fetchRecipes() {
  const recipesResponse = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/recipes`,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return recipesResponse.json();
}
