import {
    collection,
    doc,
    DocumentData,
    getDoc,
    onSnapshot,
    setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import useUserPresence from "./useUserPresence";
import { useAuthState } from "react-firebase-hooks/auth";
import useUserData from "./useUserData";
import { onAuthStateChanged } from "firebase/auth";
import userDocTemplate from "../template/userDocTemplate";

export default function useUserDoc() {
    const [userDoc, setUserDoc] = useState<DocumentData | undefined | null>(null);
    const [pendingWrites, setPendingWrites] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const userData = useUserData();

    useEffect(() => {
        return () => {
            if (userData) {
                onSnapshot(doc(db, `users/${userData?.uid}`), (doc) => {
                    setUserDoc(doc.data());
                    // setUserDoc(userDocTemplate);
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

    return { userDoc, isLoading };
}
