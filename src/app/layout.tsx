import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import dynamic from 'next/dynamic';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
};

const NavigationBar = dynamic(() => import('@/components/navigationBar'));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
