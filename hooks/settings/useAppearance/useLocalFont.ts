import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";

export default function useLocalFont() {
    const user = useUserPresence();
    const [fotnFamily, setFontFamily] = useState("Poppins");

    useEffect(() => {
        const f = localStorage.getItem("fontFamily");

        if (f) {
            setFontFamily(f);
        } else {
            localStorage.setItem("fontFamily", "Poppins");
        }
    }, [user]);

    return fotnFamily;
}
