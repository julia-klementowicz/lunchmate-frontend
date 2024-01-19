export default async function fetchIngredients() {
  const ingredientsResponse = await fetch(
    'https://lunchmate-backend-production.up.railway.app/api/ingridients',
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return ingredientsResponse.json();
}
