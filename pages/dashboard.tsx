import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Greetings from "../components/Greetings";
import TodoForm from "../components/todo/Form";
import { db } from "../firebase";
import redirectIsUser from "../functions/redirectIsUser";
import useRedirectUser from "../hooks/useRedirectUser";
import useUserPresence from "../hooks/useUserPresence";
import useUserTicket from "../hooks/useUserTicket";

export default function Dashboard() {
    const user = useUserPresence();
    useRedirectUser();

    const clientTicket = useUserTicket();

    return (
        <div>
            <Head>
                <title>Dashboard - DayV</title>
            </Head>
            <h1>Dashboard</h1>
            <h3>Email: {user?.userData?.email}</h3>

            <Greetings />

            <TodoForm />
        </div>
    );
}
