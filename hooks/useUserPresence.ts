import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState, useEffect } from "react";
import { DocumentData, doc, collection, getDoc, setDoc } from "firebase/firestore";
import useCurrentRoute from "./useCurrentRoute";
import useUserDoc from "./useUserDoc";
import useUserData from "./useUserData";

export default function useUserPresence() {
    const route = useCurrentRoute();

    // const [userData, setUserData] = useState<null | User>(null);
    const userData = useUserData();
    const { userDoc } = useUserDoc();
    const [exists, setExists] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (userData && userDoc) {
            loading && setLoading(false);
            !exists && setExists(true);
        } else if (!userData) {
            setLoading(false);
        }
    }, [userData, userDoc, exists, loading]);

    return { userData, userDoc, loading, exists };
}
