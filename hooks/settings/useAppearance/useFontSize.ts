import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";

export default function useFontSize() {
    const user = useUserPresence();
    const [fontSize, setFontSize] = useState<number | 0 | 25 | 50 | 75 | 100>(50);

    useEffect(() => {
        const fs = localStorage.getItem("fontSize");

        if (fs) {
            setFontSize(parseInt(fs));
        } else {
            localStorage.setItem("fontSize", "50");
        }
    }, [user]);

    return fontSize;
}
