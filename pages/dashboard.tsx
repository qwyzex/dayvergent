import Head from "next/head";
import { Drawer } from "@mantine/core";
import TodosLists from "../components/dashboard/TodosLists";
import JournalForm from "../components/journal/Form";
import TodoForm from "../components/todo/Form";
import useJournal from "../hooks/journal/useJournal";
import useTodos from "../hooks/todo/useTodos";
import useRedirectUser from "../hooks/useRedirectUser";
import useUserPresence from "../hooks/useUserPresence";
import styles from "../styles/Dashboard.module.sass";
import { useEffect, useState } from "react";
import Button from "../components/Button";

export default function Dashboard() {
    const user = useUserPresence();
    useRedirectUser();

    const todos = useTodos();
    const journals = useJournal();

    const [draftChanges, setDraftChanges] = useState(false);
    const [openDrawerTodo, setOpenDrawerTodo] = useState(false);
    const [openDrawerJournal, setOpenDrawerJournal] = useState(false);

    const handleDrawerClose = () => {
        const close = () => {
            setOpenDrawerJournal(false);
            setOpenDrawerTodo(false);
        };

        if (
            draftChanges &&
            confirm(
                "There are some changes that may not be saved. Are you sure want to cancel?"
            )
        ) {
            close();
            setDraftChanges(false);
        } else {
            close();
        }
    };

    // useEffect(() => {
    //     if (openDrawerJournal && openDrawerTodo) {
    //         setOpenDrawerJournal(false);
    //     } else if (openDrawerTodo && openDrawerJournal) {
    //         setOpenDrawerTodo(false);
    //     }
    // }, [openDrawerJournal, openDrawerTodo]);

    return (
        <div>
            <Head>
                <title>Dashboard - DayV</title>
            </Head>
            <h1>Dashboard</h1>
            <h3>{draftChanges.toString()}</h3>
            <Drawer
                opened={openDrawerTodo}
                onClose={handleDrawerClose}
                padding={"md"}
                position="right"
                styles={(theme) => ({
                    drawer: {
                        // backgroundColor: theme.colors.,
                    },
                    overlay: {
                        color: "#ffffff",
                        backdropFilter: "blur(5px)",
                    },
                })}
            >
                <TodoForm setDraft={setDraftChanges} />
            </Drawer>
            <Drawer
                opened={openDrawerJournal}
                onClose={handleDrawerClose}
                size="xl"
                padding={"md"}
                position="right"
                styles={(theme) => ({
                    drawer: {
                        // backgroundColor: theme.colors.,
                    },
                    overlay: {
                        color: "#ffffff",
                        backdropFilter: "blur(5px)",
                    },
                })}
            >
                <JournalForm setDraft={setDraftChanges} />
            </Drawer>
            <Button general onClick={() => setOpenDrawerJournal(true)}>
                OPEN JOURNAL
            </Button>
            <Button general onClick={() => setOpenDrawerTodo(true)}>
                OPEN TODO
            </Button>
            {/* <TodoForm />
            <TodosLists />
            <section>
                <h1>JOURNAL</h1>
                {journals?.length
                    ? journals?.map((e, i) => <p key={i}>{e.name}</p>)
                    : " no journals"}
                <JournalForm />
            </section> */}
        </div>
    );
}
