import { useEffect, useState } from "react";
import useLocalTheme from "../hooks/settings/useAppearance/useLocalTheme";
import useUserPresence from "../hooks/useUserPresence";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "../styles/Layout.module.sass";
import useUserDoc from "../hooks/useUserDoc";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import MobilePlatformWarning from "./MobilePlatformWarning";
import useLocalSettings from "../hooks/useLocalSettings";
import useAppearance from "../hooks/settings/useAppearance";

export interface LayoutInterface {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutInterface) {
    const userR = useUserPresence();
    const [user] = useAuthState(auth);

    const appearance = useAppearance();

    const [mobile, setMobile] = useState<boolean>(true);

    useEffect(() => {
        // @ts-ignore
        setMobile(navigator?.userAgentData?.mobile);
    }, []);

    const layoutFlexDirection = () => {
        if (userR.userData) {
            if (appearance.sidebarAlignment === "right") {
                return "row-reverse";
            } else {
                return "row";
            }
        } else {
            return "column";
        }
    };

    return (
        <div
            id="__layout"
            className={`${styles.x} ${
                appearance.theme === "dark" ? styles.dark : styles.light
            } ${
                appearance.fontSize === 100
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
            } ${
                appearance.sidebarAlignment === "right"
                    ? styles.sidebar_right
                    : styles.sidebar_left
            }`}
            style={{
                // @ts-ignore
                "--font-body": appearance.fontFamily,
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
