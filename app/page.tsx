import Link from 'next/link';
import { Ticket, ListOrdered, History } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">HelpDesk Pro</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          La solution moderne pour gérer vos tickets de support, organiser votre file d&apos;attente et suivre l&apos;historique de vos interventions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/tickets" className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Ticket className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Gestion des Tickets</h2>
          <p className="text-slate-500 text-sm">Créez de nouveaux tickets, consultez les demandes en cours et assignez-les à la file d&apos;attente.</p>
        </Link>

        <Link href="/queue" className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ListOrdered className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">File d&apos;attente</h2>
          <p className="text-slate-500 text-sm">Traitez les tickets de manière ordonnée selon leur priorité et leur ordre d&apos;arrivée.</p>
        </Link>

        <Link href="/history" className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-300 transition-all">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <History className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Historique</h2>
          <p className="text-slate-500 text-sm">Consultez la trace de toutes les actions effectuées sur la plateforme.</p>
        </Link>
      </div>
    </div>
  );
}
