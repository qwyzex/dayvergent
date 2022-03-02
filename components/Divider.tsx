export interface DividerProps {
    fullwidth?: boolean;
    bottom?: boolean;
    top?: boolean;
    both?: boolean;
}

export default function Divider(props: DividerProps) {
    return (
        <div
            style={{
                height: "1px",
                backgroundColor: "var(--back-d)",
                marginTop: props.top ? ".5rem" : props.both ? ".5rem" : "",
                marginBottom: props.bottom ? ".5rem" : props.both ? ".5rem" : "",
                borderRadius: "2px",
                width: props.fullwidth ? "100%" : "90%",
            }}
        ></div>
    );
}
