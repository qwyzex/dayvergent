import { useState, useEffect } from "react";
import useUserDoc from "./useUserDoc";
import useUserData from "./useUserData";

export default function useUserPresence() {
    const userData = useUserData();
    const { userDoc } = useUserDoc();
    const [exists, setExists] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        return () => {
            if (userData && userDoc) {
                loading && setLoading(false);
                !exists && setExists(true);
            } else if (!userData) {
                setLoading(false);
            }
        };
    }, [userData, userDoc, exists, loading]);

    return { userData, userDoc, loading, exists };
}
