import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'ngunyi.dev | Static Web Developer',
  description: 'Fast, beautiful websites for small businesses using Next.js & Tailwind CSS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 bg-black z-50">
          <Link href="/" className="text-2xl font-bold text-blue-600">nguny</Link>
          <nav className="space-x-6 hidden md:flex">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <Link href="/portfolio" className="hover:text-cyan-400">Portfolio</Link>
            <Link href="/services" className="hover:text-cyan-400">Services</Link>
            <Link href="/about" className="hover:text-cyan-400">About</Link>
            <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
          </nav>
          
        </header>
        <main className="grow  min-h-screen bg-black ">

        {children}
        </main>
        <footer className="mt-auto py-10 text-center text-sm text-gray-500 border-t">
          © 2025 ngunyi.dev. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
