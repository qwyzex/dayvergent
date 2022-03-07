import { useEffect, useState } from "react";
import useUserPresence from "../../useUserPresence";

export default function useSidebarAlignment() {
    const user = useUserPresence();
    const [position, setPosition] = useState<string | "left" | "right">("left");

    useEffect(() => {
        const sp = localStorage.getItem("sidebarPosition");

        if (sp) {
            setPosition(sp);
        } else {
            localStorage.setItem("sidebarPosition", "left");
        }
    }, [user]);

    return position;
}
