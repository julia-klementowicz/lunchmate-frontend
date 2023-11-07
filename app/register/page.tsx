import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:w-1/2 relative md:block">
        <Image
          src="/register.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 mt-8 mb-4">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Załóż konto</h2>

          <p className="text-center text-gray-500">Wprowadź swoje dane, aby założyć konto</p>

          <form>
            <div className="space-y-2">
              <div>
                <Label htmlFor="firstName">Imię</Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="Anna"
                  className="w-full border p-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nazwisko</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Kowalska"
                  className="w-full border p-2"
                />
              </div>
              <div>
                <Label htmlFor="birthdate">Data urodzenia</Label>
                <Input
                  type="date"
                  id="birthdate"
                  placeholder="12/04/1998"
                  className="w-full border p-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="m@example.com"
                  className="w-full border p-2"
                />
              </div>
              <div>
                <Label htmlFor="login">Login</Label>
                <Input
                  type="text"
                  id="login"
                  placeholder="example"
                  className="w-full border p-2"
                />
              </div>
              <div>
                <Label htmlFor="password">Hasło</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="************"
                  className="w-full border p-2"
                />
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

          <Button variant="outline" className="w-full text-black py-2 rounded">Zaloguj się</Button>

          <p className="text-center text-gray-500 mt-4 mb-2">
            Kontynuując zgadzasz się na 
            <Link href="https://pl.wikipedia.org/wiki/Regulamin" className="underline"> Regulamin </Link>
            i  
            <Link href="https://pl.wikipedia.org/wiki/Polityka_prywatno%C5%9ci" className="underline"> Politykę prywatności</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
