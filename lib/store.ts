export type Priority = 'basse' | 'moyenne' | 'haute';

export interface Ticket {
  id: number;
  client: string;
  description: string;
  priorite: Priority;
  created_at: Date;
}

class HelpDeskStore {
  tickets: Ticket[] = [];
  queue: Ticket[] = [];
  history: string[] = [];
  nextId = 1;

  createTicket(client: string, description: string, priorite: Priority) {
    const ticket: Ticket = {
      id: this.nextId++,
      client,
      description,
      priorite,
      created_at: new Date(),
    };
    this.tickets.push(ticket);
    this.history.push(`Ticket ${ticket.id} créé pour ${client}.`);
    return ticket;
  }

  addToQueue(ticketId: number) {
    const ticket = this.tickets.find((t) => t.id === ticketId);
    if (ticket && !this.queue.find((t) => t.id === ticketId)) {
      this.queue.push(ticket);
      const priorityMap: Record<string, number> = { haute: 1, moyenne: 2, basse: 3 };
      this.queue.sort((a, b) => {
        const pA = priorityMap[a.priorite] || 4;
        const pB = priorityMap[b.priorite] || 4;
        if (pA !== pB) return pA - pB;
        return a.created_at.getTime() - b.created_at.getTime();
      });
      this.history.push(`Ticket ${ticket.id} ajouté à la file d'attente.`);
      return true;
    }
    return false;
  }

  processNextTicket() {
    if (this.queue.length > 0) {
      const ticket = this.queue.shift()!;
      this.tickets = this.tickets.filter((t) => t.id !== ticket.id);
      this.history.push(`Ticket ${ticket.id} de ${ticket.client} traité et fermé.`);
      return ticket;
    }
    return null;
  }

  clearHistory() {
    this.history = [];
  }
}

const globalForStore = global as unknown as { store: HelpDeskStore };
export const store = globalForStore.store || new HelpDeskStore();
if (process.env.NODE_ENV !== 'production') globalForStore.store = store;
