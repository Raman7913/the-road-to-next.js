import React from "react";
import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
    return (
        <>
            <h2 className="text-xl">HomePage</h2>
            <Link href={ticketsPath()}>Tickets page</Link>
        </>
    );
};

export default HomePage;
