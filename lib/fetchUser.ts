export default async function fetchUser(id: number) {
  const userResponse = await fetch(
    `https://lunchmate-backend-production.up.railway.app/api/user/getUserById?id=${id.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return userResponse.json();
}
