import React from "react";
import styles from "../styles/CustomAnchor.module.sass";

export interface CustomAnchorProps {
    children: React.ReactNode;
    href?: string;
    newtab?: boolean;
    rel?: string;
}

export default function A({ children, href, newtab, rel }: CustomAnchorProps) {
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            className={styles.a}
            target={newtab ? "_blank" : "_self"}
            rel={rel || "noreferrer noopener"}
            href={href}
        >
            {children}
        </a>
    );
}
