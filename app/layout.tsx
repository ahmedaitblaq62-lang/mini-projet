import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Ticket, ListOrdered, History as HistoryIcon, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HelpDesk Pro',
  description: 'HelpDesk Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8 overflow-x-auto">
                <Link href="/" className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                  <Home className="w-5 h-5 mr-2" />
                  Accueil
                </Link>
                <Link href="/tickets" className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                  <Ticket className="w-5 h-5 mr-2" />
                  Tickets
                </Link>
                <Link href="/queue" className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                  <ListOrdered className="w-5 h-5 mr-2" />
                  File d&apos;attente
                </Link>
                <Link href="/history" className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                  <HistoryIcon className="w-5 h-5 mr-2" />
                  Historique
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
