type Recipe = {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  userId: number;
  comments: null;
  ingridients: Ingridient[];
  likesCount: number;
  image: string;
  time: number;
  difficulty: 'easy' | 'medium' | 'hard';
};

type Category = {
  id: number;
  name: string;
  image: string;
};

type User = {
  id: number;
  username: string;
  email: string;
  roles: [string];
  accessToken: string;
  tokenType: 'Bearer';
};
