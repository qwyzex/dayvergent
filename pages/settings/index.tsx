import Divider from "../../components/Divider";
import { useEffect, useState } from "react";
import useUserPresence from "../../hooks/useUserPresence";
import { Checkbox } from "@mantine/core";
// import SComp from "../../components/settings";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import useLocalSettings from "../../hooks/useLocalSettings";

export type settingsTab = "account" | "appearance" | "privacy" | "general";

export default function Settings() {
    const user = useUserPresence();
    const settings = useLocalSettings();
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
            <main></main>
        </div>
    );
}
