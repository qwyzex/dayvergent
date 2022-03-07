import { Dispatch, SetStateAction } from "react";
import redirect from "../functions/redirect";
import useCurrentRoute from "../hooks/useCurrentRoute";
import styles from "../styles/TabButton.module.sass";

export interface TabButtonProps {
    type: "redirect" | "setState";
    path: string | Dispatch<SetStateAction<string>>;
    children?: React.ReactChildren;
    text?: React.ReactNode;
}

export default function TabButton({ children, type, path, text }: TabButtonProps) {
    const route = useCurrentRoute();

    return (
        <button
            className={`${
                type === "redirect" && typeof path === "string" && route === path
                    ? styles.active
                    : ""
            } ${styles.button}`}
            onClick={() => {
                if (type === "redirect") {
                    // @ts-ignore
                    redirect(path);
                } else if (type === "setState") {
                    path;
                }
            }}
        >
            {children ? children : text}
        </button>
    );
}
