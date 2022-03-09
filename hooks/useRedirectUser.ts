import Router from "next/router";
import useUserPresence from "./useUserPresence";
import redirect from "../functions/redirect";
import {
    anonymousForbiddenPathRegex,
    userForbiddenPathRegex,
} from "../constant/forbiddenPath";
import { useEffect } from "react";
import useCurrentRoute from "./useCurrentRoute";
import redirectIsUser from "../functions/redirectIsUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function useRedirectUser() {
    const USER = useUserPresence();
    const route = useCurrentRoute();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user && route.match(anonymousForbiddenPathRegex)) {
                return redirect("/login");
            } else if (user && route.match(userForbiddenPathRegex)) {
                return redirect("/dashboard");
            }
        });
    }, [USER.userDoc, route]);
}
