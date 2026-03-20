from datetime import datetime

class Ticket:
    def __init__(self, id, client, description, priorite):
        self.id = id
        self.client = client
        self.description = description
        self.priorite = priorite
        self.created_at = datetime.now()

class ListeTickets:
    def __init__(self):
        self.tickets = []
        self.next_id = 1

    def add_ticket(self, client, description, priorite):
        ticket = Ticket(self.next_id, client, description, priorite)
        self.tickets.append(ticket)
        self.next_id += 1
        return ticket

    def get_all(self):
        return self.tickets

    def get_ticket(self, ticket_id):
        for t in self.tickets:
            if t.id == ticket_id:
                return t
        return None

    def remove_ticket(self, ticket_id):
        self.tickets = [t for t in self.tickets if t.id != ticket_id]
