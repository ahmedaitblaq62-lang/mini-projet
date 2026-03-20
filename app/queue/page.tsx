import { getTickets } from "@/lib/store";
import { QueueClient } from "./QueueClient";

export default function QueuePage() {
  const tickets = getTickets().filter((t) => t.status !== "closed" && t.status !== "resolved");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Ticket Queue</h1>
      <QueueClient initialTickets={tickets} />
    </div>
  );
}
