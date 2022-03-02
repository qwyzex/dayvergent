/* eslint-disable @next/next/no-img-element */
import { signOut, User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { Ref, useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import redirect from "../functions/redirect";
import useCurrentRoute from "../hooks/useCurrentRoute";
import useUserData from "../hooks/useUserDoc";
import useUserPresence from "../hooks/useUserPresence";
import styles from "../styles/Header.module.sass";
import Divider from "./Divider";

export default function Header() {
    const [openAccountDropdown, setOpenAccountDropdown] = useState(false);

    const route = useCurrentRoute();
    const wrapperRef = useRef(null);
    const accountDropdownButton = useRef(null);

    useEffect(() => {
        function handleClickOutside(e: any) {
            // @ts-ignore
            if (wrapperRef.current && !accountDropdownButton.current.contains(e.target)) {
                setOpenAccountDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const DropdownButton = ({ children, event }: any) => {
        return (
            <button className={styles.dropdownItem} onClick={event}>
                {children}
            </button>
        );
    };

    const DropdownAnchor = ({ children, to }: any) => {
        return (
            <Link href={to}>
                <a className={styles.dropdownItem}>{children}</a>
            </Link>
        );
    };

    return (
        <header className={styles.header}>
            <div className={styles.mainLogo}>
                <Link href="/">
                    <a>
                        <img
                            src={"/images/logo-simple.svg"}
                            alt="main-logos"
                            height={50}
                        />
                    </a>
                </Link>
                <h1>
                    DAY<span>VERGENT</span>
                </h1>
            </div>
            <div className={styles.rightPanel}>
                {route !== "/login" && (
                    <Link href="/login">
                        <a>LOGIN</a>
                    </Link>
                )}
                {route !== "/signup" && (
                    <Link href="/signup">
                        <a>SIGNUP</a>
                    </Link>
                )}
            </div>
        </header>
    );
}
