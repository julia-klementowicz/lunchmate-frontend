'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import RecipeIngredient from '../list_items/RecipeIngredient';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function AddRecipeForm({ ingredients, categories }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState<undefined | number>();
  const [difficulty, setDifficulty] = useState('easy');
  const [categoryId, setCategoryId] = useState(1);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredientsList, setIngredientsList] = useState<
    {
      ingridientId: number;
      recipeId: number;
      name: string;
      amount: number;
      unit: string;
    }[]
  >([]);
  const [currentIngredient, setCurrentIngredient] = useState({
    name: 'Ananas',
    id: 30,
  });
  const [currentIngredientAmount, setCurrentIngredientAmount] = useState(1);
  const [currentIngredientUnit, setCurrentIngredientUnit] = useState('szt.');

  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  function addIngredient() {
    setIngredientsList((prev) => [
      ...prev,
      {
        ingridientId: currentIngredient.id,
        recipeId: 1,
        name: currentIngredient.name,
        amount: currentIngredientAmount,
        unit: currentIngredientUnit,
      },
    ]);
    setCurrentIngredient({ name: 'Ananas', id: 30 });
    setCurrentIngredientAmount(1);
    setCurrentIngredientUnit('szt.');
  }

  function removeIngredient(id: number) {
    setIngredientsList((prev) =>
      prev.filter((ingredient) => ingredient.ingridientId !== id),
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !time || !description || !image) return;
    if (ingredientsList.length === 0) {
      alert('Dodaj przynajmniej jeden składnik');
    }

    const user = JSON.parse(localStorage.getItem('user') as string);
    if (!user.accessToken || !user.id) {
      router.push('/login');
      return;
    }

    const response = await fetch(
      `https://lunchmate-backend-production.up.railway.app/api/recipes`,
      {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
          categoryId,
          userId: user.id,
          image,
          time,
          difficulty,
          ingridients: ingredientsList,
          likesCount: 0,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );

    if (response.ok) {
      router.push('/');
      return;
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className='grid-cols-2 gap-8 sm:grid'>
        <div className='flex flex-col gap-2'>
          <div className=''>
            <Label>Nazwa przepisu</Label>
            <Input
              placeholder='Nazwa przepisu'
              className='max-w-[500px]'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className=''>
            <Label>Czas przygotowania (min)</Label>
            <Input
              type='number'
              placeholder='Czas przygotowania (min)'
              className='max-w-[500px]'
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value))}
              required
            />
          </div>
          <div className=''>
            <Label>Poziom trudności</Label>
            <Select
              value={difficulty}
              onValueChange={(val) => setDifficulty(val)}
            >
              <SelectTrigger className='max-w-[500px]'>
                <SelectValue placeholder='Poziom trudności' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Poziom trudności</SelectLabel>
                  <SelectItem value='easy'>Łatwy</SelectItem>
                  <SelectItem value='medium'>Średni</SelectItem>
                  <SelectItem value='hard'>Trudny</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className=''>
            <Label>Kategoria</Label>
            <Select
              value={categoryId.toString()}
              onValueChange={(e) => {
                setCategoryId(parseInt(e));
              }}
            >
              <SelectTrigger className='max-w-[500px]'>
                <SelectValue placeholder='Kategoria' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kategoria</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className=''>
            <Label>Opis wykonania</Label>
            <Textarea
              placeholder='Opis wykonania'
              className='h-[120px] max-w-[500px]'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className=''>
            <Label>Adres URL obrazu</Label>
            <Input
              placeholder='URL'
              className='max-w-[500px]'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button className='mt-4 h-10 max-w-[500px] rounded-lg bg-yellow-400'>
            Publikuj przepis
          </button>
        </div>
        <div className='w-full'>
          <h3 className=''>Składniki</h3>
          <ul>
            {ingredientsList.map((ingredient) => (
              <RecipeIngredient
                key={ingredient.name}
                ingredient={ingredient}
                removeFunction={() => removeIngredient(ingredient.ingridientId)}
              />
            ))}
          </ul>
          <div className='flex justify-between'>
            <div className='w-[28%]'>
              <Label>Składnik</Label>
              <Select
                value={JSON.stringify(currentIngredient)}
                onValueChange={(val) => {
                  setCurrentIngredient(JSON.parse(val));
                }}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Nazwa składnika' />
                </SelectTrigger>
                <SelectContent className='max-h-[500px]'>
                  <SelectGroup>
                    <SelectLabel>Składnik</SelectLabel>
                    {ingredients.map((ingredient) => (
                      <SelectItem
                        key={ingredient.id}
                        value={JSON.stringify({
                          name: ingredient.name,
                          id: ingredient.id,
                        })}
                      >
                        {ingredient.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='w-[28%]'>
              <Label>Ilość</Label>
              <Input
                type='number'
                placeholder='Ilość'
                className=''
                value={currentIngredientAmount}
                onChange={(e) =>
                  setCurrentIngredientAmount(parseInt(e.target.value))
                }
              />
            </div>
            <div className='w-[28%]'>
              <Label>Jednostka</Label>
              <Select
                value={currentIngredientUnit}
                onValueChange={(val) => setCurrentIngredientUnit(val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder='Jednostka' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jednostka</SelectLabel>
                    <SelectItem value='szt.'>szt.</SelectItem>
                    <SelectItem value='g'>g</SelectItem>
                    <SelectItem value='ml'>ml</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-end'>
              <button
                type='button'
                onClick={addIngredient}
                disabled={
                  !currentIngredient.id ||
                  !currentIngredientAmount ||
                  !currentIngredientUnit
                }
                className='flex h-10 items-center justify-center rounded-lg bg-yellow-400 p-4 disabled:cursor-not-allowed disabled:bg-gray-300'
              >
                Dodaj
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
