import React from "react";
import inititalTickets from "@/data";

type ticketPageProps = {
    params: {
        ticketId: string;
    };
};
const TicketPage = ({ params }: ticketPageProps) => {
    const ticketInfo = inititalTickets.find(
        (ticket) => ticket.id === params.ticketId
    );
    if (ticketInfo === undefined) {
        return "ticket not found";
    }
    return (
        <div>
            <h1 className="text-red-200 text-8xl text-center">
                {ticketInfo?.title}
            </h1>
            <h2>{ticketInfo?.content}</h2>
        </div>
    );
};

export default TicketPage;
