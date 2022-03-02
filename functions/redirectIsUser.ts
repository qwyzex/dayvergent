import { onAuthStateChanged } from "firebase/auth";
import Router from "next/router";
import {
    anonymousForbiddenPathRegex,
    userForbiddenPathRegex,
} from "../constant/forbiddenPath";
import { auth } from "../firebase";
import useUserDoc from "../hooks/useUserDoc";
import redirect from "./redirect";

export default function redirectIsUser() {
    const route = Router.pathname;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (route.match(userForbiddenPathRegex) && route !== "/signup") {
                return redirect("/dashboard");
            }
        } else if (route.match(anonymousForbiddenPathRegex)) {
            return redirect("/login");
        }
    });
}
