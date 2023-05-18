import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar, UiProvider } from '@/components/ui';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const metadata: Metadata = {
  title: 'Pokemon App',
  authors: [{ name: 'Daniel Correa' }],
  keywords: ['pokemon', 'pokedex'],
  openGraph: {
    title: 'Pokemon App',
    description: 'Aplicación sobre los pokemons',
    images: [`${origin}/img/banner.png`]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <Navbar />
          <main style={{
            padding: '0 20px',
          }}>
            {children}
          </main>
        </UiProvider>
      </body>
    </html>
  )
}
