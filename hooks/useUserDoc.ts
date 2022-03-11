import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import useUserData from "./useUserData";

export default function useUserDoc() {
    const [userDoc, setUserDoc] = useState<DocumentData | undefined | null>(null);
    const [pendingWrites, setPendingWrites] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const userData = useUserData();

    useEffect(() => {
        return () => {
            if (userData) {
                onSnapshot(doc(db, `users/${userData?.uid}`), (doc) => {
                    !userDoc && setUserDoc(doc.data());
                    isLoading && setIsLoading(false);
                    if (doc.metadata.hasPendingWrites && !pendingWrites) {
                        setPendingWrites(true);
                    }
                });
            } else {
                userDoc && setUserDoc(null);
                isLoading && setIsLoading(false);
            }
        };
    }, [userDoc, isLoading, pendingWrites, userData]);

    return { userDoc, isLoading, pendingWrites };
}
