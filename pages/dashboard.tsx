import { collection, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Greetings from "../components/Greetings";
import JournalForm from "../components/journal/Form";
import TodoForm from "../components/todo/Form";
import { db } from "../firebase";
import redirectIsUser from "../functions/redirectIsUser";
import useJournal from "../hooks/journal/useJournal";
import useTodos from "../hooks/todo/useTodos";
import useRedirectUser from "../hooks/useRedirectUser";
import useUserPresence from "../hooks/useUserPresence";
import useUserTicket from "../hooks/useUserTicket";

export default function Dashboard() {
    const user = useUserPresence();
    useRedirectUser();

    const todos = useTodos();
    const journals = useJournal();

    return (
        <div>
            <Head>
                <title>Dashboard - DayV</title>
            </Head>
            <h1>Dashboard</h1>
            <TodoForm />
            <section>
                <h1>TODO</h1>
                {todos?.length
                    ? todos.map((e) => (
                          <div key={e.id}>
                              <h4>{e.id}</h4>
                              <p>{e.name}</p>
                          </div>
                      ))
                    : "NO DATA"}
            </section>
            <section>
                <h1>JOURNAL</h1>
                {journals?.length
                    ? journals?.map((e, i) => <p key={i}>{e.name}</p>)
                    : " no journals"}
                <JournalForm />
            </section>
        </div>
    );
}
