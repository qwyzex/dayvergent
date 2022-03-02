/* eslint-disable @next/next/no-img-element */
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import recon from "../functions/recon";
import useCurrentRoute from "../hooks/useCurrentRoute";
import styles from "../styles/Sidebar.module.sass";
import Divider from "./Divider";
import SVG from "./svg";

export default function Sidebar() {
    const route = useCurrentRoute();
    const [openBottomMenu, setOpenBottomMenu] = useState(false);

    const bottomMenuWrapperRef = useRef<any>();
    const bottomMenuButtonRef = useRef<any>();

    useEffect(() => {
        function handleClickOutside(e: any) {
            if (
                bottomMenuWrapperRef.current &&
                !bottomMenuWrapperRef.current.contains(e.target)
            ) {
                setOpenBottomMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [bottomMenuWrapperRef]);

    return (
        <aside className={styles.sidebar}>
            <nav>
                <Link href="/dashboard">
                    <a className={recon(route, "/dashboard") ? styles.active : ""}>
                        <SVG.Logo.Sole
                            color={
                                recon(route, "/dashboard")
                                    ? "var(--back-a)"
                                    : "var(--text-a)"
                            }
                        />
                    </a>
                </Link>
                <Divider both fullwidth />
                <Link href="/statistic">
                    <a className={recon(route, "/statistic") ? styles.active : ""}>
                        <SVG.Chart
                            color={
                                recon(route, "/statistic")
                                    ? "var(--back-a)"
                                    : "var(--text-a)"
                            }
                        />
                    </a>
                </Link>
            </nav>
            <div className={styles.menuWrapper} ref={bottomMenuWrapperRef}>
                <main className={openBottomMenu ? styles.open : ""}>
                    <Link href="/account">
                        <a>ACCOUNT</a>
                    </Link>
                    <Link href="/settings">
                        <a>SETTINGS</a>
                    </Link>
                    <Divider both />
                    <button
                        onClick={() => {
                            if (confirm("Are You Sure Want To Sign Out?")) {
                                signOut(auth);
                            }
                        }}
                    >
                        SIGN OUT
                    </button>
                </main>
                <button
                    ref={bottomMenuButtonRef}
                    className={openBottomMenu ? styles.active : ""}
                    onClick={() => {
                        setOpenBottomMenu(!openBottomMenu);
                    }}
                >
                    <SVG.Menu color="var(--text-b)" />
                </button>
            </div>
        </aside>
    );
}
