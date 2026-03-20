from flask import Blueprint, render_template, request, redirect, url_for, flash
from .helpdesk import helpdesk_app

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/tickets', methods=['GET', 'POST'])
def tickets():
    if request.method == 'POST':
        client = request.form.get('client')
        description = request.form.get('description')
        priorite = request.form.get('priorite')
        helpdesk_app.create_ticket(client, description, priorite)
        flash('Ticket créé avec succès !')
        return redirect(url_for('main.tickets'))
    
    all_tickets = helpdesk_app.liste_tickets.get_all()
    return render_template('tickets.html', tickets=all_tickets)

@main.route('/add_to_queue/<int:ticket_id>', methods=['POST'])
def add_to_queue(ticket_id):
    if helpdesk_app.add_to_queue(ticket_id):
        flash(f'Ticket {ticket_id} ajouté à la file d\'attente.')
    else:
        flash(f'Erreur lors de l\'ajout du ticket {ticket_id}.')
    return redirect(url_for('main.tickets'))

@main.route('/queue')
def queue():
    return render_template('queue.html', tickets=helpdesk_app.queue)

@main.route('/process_ticket', methods=['POST'])
def process_ticket():
    ticket = helpdesk_app.process_next_ticket()
    if ticket:
        flash(f'Ticket {ticket.id} traité avec succès.')
    else:
        flash('Aucun ticket dans la file d\'attente.')
    return redirect(url_for('main.queue'))

@main.route('/history')
def history():
    return render_template('history.html', actions=helpdesk_app.history)
