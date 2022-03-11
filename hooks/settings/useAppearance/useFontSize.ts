import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";
import useZeroLatency from "../../useZeroLatency";

export default function useFontSize() {
    const int = useZeroLatency();
    const [fontSize, setFontSize] = useState<number | 0 | 25 | 50 | 75 | 100>(50);

    useEffect(() => {
        const fs = localStorage.getItem("fontSize");

        if (fs) {
            setFontSize(parseInt(fs));
        } else {
            localStorage.setItem("fontSize", "50");
        }
    }, [int]);

    return { fontSize, setFontSize };
}
