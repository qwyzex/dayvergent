import styles from "../styles/AnchorButton.module.sass";
import Link from "next/link";

export interface AnchorButtonProps {
    text: string;
    to: string;
    color?: "success" | "danger" | "warning" | "info";
}

export default function AnchorButton({ text, color, to }: AnchorButtonProps) {
    return (
        <Link href={to}>
            <a
                className={`${styles.a} ${
                    color === "danger"
                        ? styles.danger
                        : color === "info"
                        ? styles.info
                        : color === "success"
                        ? styles.success
                        : color === "warning" && styles.warning
                }`}
                style={{
                    // @ts-ignore
                    "--color":
                        color === "danger"
                            ? "#fc3939"
                            : color === "info"
                            ? "#2984fa"
                            : color === "success"
                            ? "#3ae92a"
                            : color === "warning"
                            ? "#ffd000"
                            : "var(--text-a)",
                }}
            >
                {text}
            </a>
        </Link>
    );
}
