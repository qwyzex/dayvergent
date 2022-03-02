import Divider from "../../components/Divider";
import { useEffect, useState } from "react";
import useUserPresence from "../../hooks/useUserPresence";

export type settingsTab = "account" | "appearance" | "privacy" | "general";

export default function Settings() {
    const user = useUserPresence();
    const [loading, setLoading] = useState(user.loading);
    const [activeTab, setActiveTab] = useState<settingsTab>("general");

    function changeTheme() {
        const t = localStorage.getItem("theme");

        if (t) {
            localStorage.setItem("theme", t === "light" ? "dark" : "light");
        }
    }

    return (
        <div className="settings">
            <h1>GENERAL</h1>
        </div>
    );
}
