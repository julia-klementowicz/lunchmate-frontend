import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lunch Mate',
  description: 'Lunch Mate - best social media app with YOUR recipies!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={poppins.className + 'min-h-screen'}
      >
        {children}
      </body>
    </html>
  );
}
