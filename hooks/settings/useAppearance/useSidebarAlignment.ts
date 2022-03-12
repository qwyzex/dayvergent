import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";
import useZeroLatency from "../../useZeroLatency";

export default function useSidebarAlignment() {
    const int = useZeroLatency();
    const [position, setPosition] = useState<string | "left" | "right">("left");

    useEffect(() => {
        const sp = localStorage.getItem("sidebarAlignment");

        if (sp) {
            setPosition(sp);
        } else {
            localStorage.setItem("sidebarAlignment", "left");
        }
    }, [int]);

    return { position, setPosition };
}
