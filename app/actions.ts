'use server'

import { store, Priority } from '@/lib/store';
import { revalidatePath } from 'next/cache';

export async function createTicketAction(formData: FormData) {
  const client = formData.get('client') as string;
  const description = formData.get('description') as string;
  const priorite = formData.get('priorite') as Priority;
  
  store.createTicket(client, description, priorite);
  revalidatePath('/tickets');
}

export async function addToQueueAction(ticketId: number) {
  store.addToQueue(ticketId);
  revalidatePath('/tickets');
  revalidatePath('/queue');
}

export async function processNextTicketAction() {
  store.processNextTicket();
  revalidatePath('/queue');
  revalidatePath('/history');
  revalidatePath('/tickets');
}

export async function clearHistoryAction() {
  store.clearHistory();
  revalidatePath('/history');
}
