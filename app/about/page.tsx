import Navbar from '@/components/navigation/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className='m-auto mt-1 flex max-w-[1300px] flex-col gap-4 p-4 text-sm sm:mt-2 sm:text-base'>
        <p className='my-4 text-center text-2xl font-semibold'>
          Strona stworzona w ramach projektu z przedmiotu Projekt Grupowy
        </p>
        <p className='text-center text-xl font-semibold'>Autorzy:</p>
        <p className='text-center text-xl font-semibold'>Julia Klementowicz</p>
        <p className='text-center text-xl font-semibold'>Aleksandra Sobecka</p>
        <p className='text-center text-xl font-semibold'>Grzegorz Fiedoruk</p>
        <p className='text-center text-xl font-semibold'>Marcin Buko</p>
        <p className='text-center text-xl font-semibold'>Andrey Kachar</p>
      </main>
    </>
  );
}
