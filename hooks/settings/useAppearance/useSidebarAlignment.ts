import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";
import useZeroLatency from "../../useZeroLatency";

export default function useSidebarAlignment() {
    const int = useZeroLatency();
    const [position, setPosition] = useState<string | "left" | "right">("left");

    useEffect(() => {
        const sp = localStorage.getItem("sidebarPosition");

        if (sp) {
            setPosition(sp);
        } else {
            localStorage.setItem("sidebarPosition", "left");
        }
    }, [int]);

    return { position, setPosition };
}
