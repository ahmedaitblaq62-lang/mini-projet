import { store } from '@/lib/store';
import { History as HistoryIcon, Trash2 } from 'lucide-react';
import { clearHistoryAction } from '@/app/actions';

export default function HistoryPage() {
  const actions = store.history;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center">
          <HistoryIcon className="w-8 h-8 mr-3 text-slate-500" />
          Historique des Actions
        </h1>
        {actions.length > 0 && (
          <form action={clearHistoryAction}>
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-medium transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Vider l&apos;historique
            </button>
          </form>
        )}
      </div>
      
      {actions.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 border-dashed text-center text-slate-500">
          Aucune action enregistrée pour le moment.
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {actions.map((action, i) => (
              <li key={i} className="p-4 hover:bg-slate-50 transition-colors flex items-start">
                <div className="mt-1.5 mr-4 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <span className="text-slate-700">{action}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
