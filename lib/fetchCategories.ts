export default async function fetchCategories() {
  const categoriesResponse = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/categories`,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return categoriesResponse.json();
}
