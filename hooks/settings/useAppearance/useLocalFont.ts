import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";
import useZeroLatency from "../../useZeroLatency";

export default function useLocalFont() {
    const int = useZeroLatency();
    const [fontFamily, setFontFamily] = useState("Poppins");

    useEffect(() => {
        const f = localStorage.getItem("fontFamily");

        if (f) {
            setFontFamily(f);
        } else {
            localStorage.setItem("fontFamily", "Poppins");
        }
    }, [int]);

    return { fontFamily, setFontFamily };
}
