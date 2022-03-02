import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import useUserPresence from "../hooks/useUserPresence";
import useRedirectUser from "../hooks/useRedirectUser";
import { useEffect } from "react";
import redirectIsUser from "../functions/redirectIsUser";

const Landing: NextPage = () => {
    const user = useUserPresence();

    useRedirectUser();

    return (
        <div>
            <Head>
                <title>DayVergent</title>
            </Head>
            <h1>Hey</h1>
            <p>
                {user.exists
                    ? "Logged in"
                    : user.loading
                    ? "Loading... "
                    : "Not logged in"}
            </p>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </div>
    );
};

export default Landing;
