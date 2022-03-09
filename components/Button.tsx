import styles from "../styles/Button.module.sass";

export interface ButtonInterface {
    active?: boolean;
    children?: React.ReactNode;
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
    general?: boolean;
}

export default function Button({
    active,
    children,
    onClick,
    disabled,
    general,
}: ButtonInterface) {
    return (
        <button
            className={`${styles.button} ${general ? styles.general : ""} ${
                active ? styles.active : ""
            }`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
