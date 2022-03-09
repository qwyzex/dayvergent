import { collection, getDocs, query } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../firebase";
import useUserPresence from "../useUserPresence";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useJournal() {
    const { userData } = useUserPresence();

    const journalRef = collection(db, `users/${userData?.uid}/journal`);
    const q = query(journalRef);

    const [journals] = useCollectionData(q, {
        idField: "id",
    });

    return journals;
}
