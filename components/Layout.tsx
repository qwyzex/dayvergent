import { useEffect, useState } from "react";
import useLocalTheme from "../hooks/useLocalTheme";
import useUserPresence from "../hooks/useUserPresence";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "../styles/Layout.module.sass";
import useUserDoc from "../hooks/useUserDoc";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import MobilePlatformWarning from "./MobilePlatformWarning";

export interface LayoutInterface {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutInterface) {
    const userR = useUserPresence();
    const [user] = useAuthState(auth);
    const theme = useLocalTheme();

    const { userDoc } = useUserDoc();

    // @ts-ignore
    const [mobile, setMobile] = useState<boolean>(true);

    useEffect(() => {
        // @ts-ignore
        setMobile(navigator?.userAgentData?.mobile);
    }, []);

    return (
        <div
            id="__layout"
            className={`${styles.x} ${theme === "dark" ? styles.dark : styles.light}`}
            style={{
                display: "flex",
                flexDirection: userR.userDoc ? "row" : "column",
            }}
        >
            {!mobile ? (
                !userR.loading ? (
                    <>
                        {userR.userDoc ? <Sidebar /> : <Header />}
                        <main className={styles.appMainComponent}>{children}</main>
                    </>
                ) : (
                    "LOADING..."
                )
            ) : (
                <MobilePlatformWarning />
            )}
        </div>
    );
}
