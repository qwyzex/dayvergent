import styles from "./LoadingOverlay.module.sass";

export interface LoadingOverlayProps {
    active: any;
}

export default function LoadingOverlay({ active }: LoadingOverlayProps) {
    return (
        <div
            className={styles.container}
            style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                left: "0",
                right: "0",
                backgroundColor: "#14141440",
            }}
        ></div>
    );
}
