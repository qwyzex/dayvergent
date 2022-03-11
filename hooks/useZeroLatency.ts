import { useState } from "react";

export default function useZeroLatency() {
    const [v, setV] = useState(0);

    setTimeout(() => {
        setV(v + 1);
    }, 10);

    return v;
}
