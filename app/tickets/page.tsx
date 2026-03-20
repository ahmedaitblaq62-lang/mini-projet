import { store } from '@/lib/store';
import { Clock } from 'lucide-react';
import TicketCard from './TicketCard';
import CreateTicketForm from '@/components/CreateTicketForm';

export default function TicketsPage() {
  const tickets = store.tickets;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Créer un Ticket</h1>
        <CreateTicketForm />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-2 text-slate-500" />
          Tickets Ouverts ({tickets.length})
        </h2>
        
        {tickets.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 border-dashed text-center text-slate-500">
            Aucun ticket ouvert pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
