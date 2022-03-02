import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

export default function useUserData() {
    const [userData, setUserData] = useState<null | User>(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            !userData && setUserData(user);
            localStorage.setItem(
                "lastTimeSignedIn",
                Date.parse(
                    user.metadata.lastSignInTime?.replace(/^.{5}/g, "")!
                ).toString()
            );
            localStorage.setItem(
                "today",
                Date.parse(new Date().toDateString()).toString()
            );
        }
    });

    return userData;
}
