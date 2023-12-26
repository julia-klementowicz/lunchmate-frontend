"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  firstName: z.string().refine(data => data.trim() !== '', { message: 'To pole jest wymagane' }),
  lastName: z.string().refine(data => data.trim() !== '', { message: 'To pole jest wymagane' }),
  birthdate: z.string().refine(data => data.trim() !== '', { message: 'To pole jest wymagane' }),
  email: z.string().email({ message: 'To pole jest wymagane' }),
  login: z.string().refine(data => data.trim() !== '', { message: 'To pole jest wymagane' }),
  password: z.string()
    .min(8, 'Hasło powinno zawierać co najmniej 8 znaków')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:'",.<>?/|\\[\]`~])/,
      'Hasło powinno zawierać małe i duże litery, cyfrę i znak specjalny'
    ),
});

type FormData = FieldValues;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:w-1/2 relative md:block">
        <Image
          src="/register_image.webp"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 mt-8 mb-4 ">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Załóż konto</h2>

          <p className="text-center text-gray-500">Wprowadź swoje dane, aby założyć konto</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <div>
                <Label htmlFor="firstName">Imię</Label>
                <Input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  placeholder="Anna"
                  className="w-full border p-2"
                />
                {errors.firstName && (
                  <p className='text-red-500 text-right text-xs'>{`${errors.firstName.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Nazwisko</Label>
                <Input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  placeholder="Kowalska"
                  className="w-full border p-2"
                />
                {errors.lastName && (
                  <p className='text-red-500 text-right text-xs'>{`${errors.lastName.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="birthdate">Data urodzenia</Label>
                <Input
                  {...register("birthdate")}
                  type="date"
                  id="birthdate"
                  placeholder="12/04/1998"
                  className="w-full border p-2"
                />
                {errors.birthdate && (
                  <p className='text-red-500 text-right text-xs'>{`${errors.birthdate.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="m@example.com"
                  className="w-full border p-2"
                />
                {errors.email && (
                  <p className='text-red-500 text-right text-xs'>{`${errors.email.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="login">Login</Label>
                <Input
                  {...register("login")}
                  type="text"
                  id="login"
                  placeholder="example"
                  className="w-full border p-2"
                />
                {errors.login && (
                  <p className='text-red-500 text-right text-xs'>{`${errors.login.message}`}</p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Hasło</Label>
                <Input
                  {...register("password")}
                  type="password"
                  id="password"
                  placeholder="************"
                  className="w-full border p-2"
                />
                {errors.password && (
                  <p className='text-red-500 text-right text-xs'>{`${errors.password.message}`}</p>
                )}
              </div>
              <Button className="w-full bg-primary-yellow text-black py-2 rounded">
                Załóż konto
              </Button>
            </div>
          </form>

          <div className="flex items-center justify-center space-x-4">
            <div className="flex-1 border-b"></div>
            <div className="text-gray-400">LUB</div>
            <div className="flex-1 border-b"></div>
          </div>
          <Link href="/login">
            <Button variant="outline" className="w-full text-black py-2 rounded mt-3.5">Zaloguj się</Button>
          </Link>
          <p className="text-center text-gray-500 mt-4 mb-2">
            Kontynuując zgadzasz się na 
            <Link href="https://pl.wikipedia.org/wiki/Regulamin" className="underline"> Regulamin </Link>
            i  
            <Link href="https://pl.wikipedia.org/wiki/Polityka_prywatno%C5%9Bci" className="underline"> Politykę prywatności</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
