import styles from "../styles/Button.module.sass";

export interface ButtonInterface {
    active?: boolean;
    children?: React.ReactNode;
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
}

export default function Button({ active, children, onClick, disabled }: ButtonInterface) {
    return (
        <button
            className={`${styles.button} ${active ? styles.active : ""}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
