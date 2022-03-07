import styles from "../../styles/SettingsItem.module.sass";

export interface SettingsItemInterface {
    children: React.ReactNode;
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    danger?: boolean;
    bigChild?: boolean;
}

export default function SettingsItem({
    children,
    title,
    description,
    danger,
    bigChild,
}: SettingsItemInterface) {
    return (
        <div
            className={`${styles.container} ${danger ? styles.danger : ""} ${
                bigChild ? styles.bigChildren : ""
            }`}
        >
            <article>
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
            <main>{children}</main>
        </div>
    );
}
