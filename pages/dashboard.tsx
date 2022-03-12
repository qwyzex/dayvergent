import Head from "next/head";
import TodosLists from "../components/dashboard/TodosLists";
import JournalForm from "../components/journal/Form";
import TodoForm from "../components/todo/Form";
import useJournal from "../hooks/journal/useJournal";
import useTodos from "../hooks/todo/useTodos";
import useRedirectUser from "../hooks/useRedirectUser";
import useUserPresence from "../hooks/useUserPresence";
import styles from "../styles/Dashboard.module.sass";

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
            <TodosLists />
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
