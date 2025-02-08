import React from "react";
import inititalTickets from "@/data";

// Define the type for the ticket
type Ticket = {
    id: string;
    title: string;
    content: string;
};

// Define the props for the page component
interface TicketPageProps {
    params: {
        ticketId: string;
    };
}

const TicketPage = ({ params }: TicketPageProps) => {
    // Find the ticket based on the ticketId
    const ticketInfo = inititalTickets.find(
        (ticket) => ticket.id === params.ticketId
    );

    // If the ticket is not found, return a message
    if (!ticketInfo) {
        return <div>Ticket not found</div>;
    }

    // Render the ticket details
    return (
        <div>
            <h1 className="text-red-200 text-8xl text-center">
                {ticketInfo.title}
            </h1>
            <h2>{ticketInfo.content}</h2>
        </div>
    );
};

export default TicketPage;
