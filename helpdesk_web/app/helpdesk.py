from .models import ListeTickets

class HelpDesk:
    def __init__(self):
        self.liste_tickets = ListeTickets()
        self.queue = []
        self.history = []

    def create_ticket(self, client, description, priorite):
        ticket = self.liste_tickets.add_ticket(client, description, priorite)
        self.history.append(f"Ticket {ticket.id} créé pour {client}.")
        return ticket

    def add_to_queue(self, ticket_id):
        ticket = self.liste_tickets.get_ticket(ticket_id)
        if ticket and ticket not in self.queue:
            self.queue.append(ticket)
            # Sort queue by priority (haute > moyenne > basse)
            priority_map = {'haute': 1, 'moyenne': 2, 'basse': 3}
            self.queue.sort(key=lambda t: (priority_map.get(t.priorite, 4), t.created_at))
            self.history.append(f"Ticket {ticket.id} ajouté à la file d'attente.")
            return True
        return False

    def process_next_ticket(self):
        if self.queue:
            ticket = self.queue.pop(0)
            self.liste_tickets.remove_ticket(ticket.id)
            self.history.append(f"Ticket {ticket.id} de {ticket.client} traité et fermé.")
            return ticket
        return None

helpdesk_app = HelpDesk()
