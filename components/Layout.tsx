import useUserPresence from "../hooks/useUserPresence";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "../styles/Layout.module.sass";
import useAppearance from "../hooks/settings/useAppearance";
import { useEffect } from "react";

export interface LayoutInterface {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutInterface) {
    const user = useUserPresence();

    const appearance = useAppearance();

    const preferences = {
        theme: user.exists
            ? appearance.theme === "dark"
                ? styles.dark
                : styles.light
            : "light",
        fontSize: user.exists
            ? appearance.fontSize === 100
                ? styles.font_XL
                : appearance.fontSize === 75
                ? styles.font_L
                : appearance.fontSize === 50
                ? styles.font_M
                : appearance.fontSize === 25
                ? styles.font_S
                : appearance.fontSize === 0
                ? styles.font_XS
                : styles.font_M
            : styles.font_M,
        sidebarAlignment: user.exists
            ? appearance.sidebarAlignment === "right"
                ? styles.sidebar_right
                : styles.sidebar_left
            : "",
        fontBody: user.exists ? appearance.fontFamily : "Poppins",
    };

    useEffect(() => {
        sessionStorage.setItem("today", Date.parse(new Date().toString()).toString());
    }, []);

    return (
        <div
            id="__layout"
            className={`${styles.x} ${preferences.fontSize} ${preferences.sidebarAlignment} ${preferences.theme}`}
            style={{
                // @ts-ignore
                "--font-body": preferences.fontBody,
            }}
        >
            {!user.loading ? (
                <>
                    {user.exists ? <Sidebar /> : <Header />}
                    <main className={styles.appMainComponent}>{children}</main>
                </>
            ) : (
                "LOADING..."
            )}
        </div>
    );
}
