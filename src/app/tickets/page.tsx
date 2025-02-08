import Link from "next/link";
import initialTickets from "../../data";
import { ticketPath } from "@/paths";
const TicketsPage = () => {
    return (
        <div>
            {initialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <Link className="text-lg" href={ticketPath(ticket.id)}>
                        {ticket.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TicketsPage;
