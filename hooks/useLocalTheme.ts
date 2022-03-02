import { useEffect, useState } from "react";
import useUserPresence from "./useUserPresence";

export default function useLocalTheme() {
    const [theme, setTheme] = useState<string | null>(null);
    const user = useUserPresence();

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme);
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }, [user]);

    return theme;
}
