import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";
import useZeroLatency from "../../useZeroLatency";

export default function useLocalTheme() {
    const int = useZeroLatency();
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");

        return () => {
            if (localTheme) {
                setTheme(localTheme);
            } else {
                localStorage.setItem("theme", "light");
                setTheme("light");
            }
        };
    }, [int]);

    return { theme, setTheme };
}
