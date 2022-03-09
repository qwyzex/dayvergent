import { collection, getDocs, query } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../firebase";
import useUserPresence from "../useUserPresence";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useTodos() {
    const { userData } = useUserPresence();

    const todosRef = collection(db, `users/${userData?.uid}/todos`);
    const q = query(todosRef);

    const [todos] = useCollectionData(q, {
        idField: "id",
    });

    return todos;
}
