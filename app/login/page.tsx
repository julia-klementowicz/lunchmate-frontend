import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 mt-8 mb-4">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Zaloguj się</h2>

          <p className="text-center text-gray-500">Wprowadź swój adres email i hasło, aby się zalogować</p>

          <form>
            <div className="space-y-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full border p-2"
                />
              </div>
              <div>
                <Label htmlFor="password">Hasło</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="*******************"
                  className="w-full border p-2"
                />
              </div>
              <Button className="w-full bg-primary-yellow text-black py-2 rounded">
                Zaloguj się
              </Button>
              <div className="flex items-center justify-center space-x-4">
              <div className="flex-1 border-b"></div>
              <div className="text-gray-400">Nie masz jeszcze konta?</div>
              <div className="flex-1 border-b"></div>
          </div>
          <Link href="/register">
            <Button variant="outline" className="w-full text-black py-2 rounded">
              Załóż konto
            </Button>
          </Link>
            </div>
          </form>

          <p className="text-center text-gray-500 mt-4 mb-2">
            Kontynuując zgadzasz się na 
            <Link href="https://pl.wikipedia.org/wiki/Regulamin" className="underline"> Regulamin </Link>
            i 
            <Link href="https://pl.wikipedia.org/wiki/Polityka_prywatno%C5%9ci" className="underline"> Politykę prywatności</Link>
          </p>
        </div>
      </div>

      <div className="hidden md:w-1/2 relative md:block">
        <Image
          src="/login.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>
    </div>
  );
}
