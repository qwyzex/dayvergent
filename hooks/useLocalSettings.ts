import { useState, useEffect } from "react";
import useUserPresence from "./useUserPresence";

export interface settingsInterface {
    general: {
        syncSettings: boolean;
        highResData: boolean;
    };
    appearance: {
        theme: "light" | "dark";
    };
    privacy: {
        privateProfile: boolean;
        authToken: Promise<string> | undefined;
        provider: string | undefined;
    };
}

export default function useLocalSettings() {
    const user = useUserPresence();
    const [settings, setSettings] = useState<settingsInterface | null>(null);

    useEffect(() => {
        let dat = localStorage.getItem("settings");
        const defaultSettings = {
            general: {
                syncSettings: true,
                highResData: false,
            },
            appearance: {
                theme: "light",
            },
            privacy: {
                privateProfile: false,
                authToken: user?.userData?.getIdToken(),
                provider: user?.userData?.providerId,
            },
        };

        if (dat) {
            setSettings(JSON.parse(dat));
        } else {
            localStorage.setItem("settings", JSON.stringify(defaultSettings));
            setSettings(JSON.parse(dat!));
        }
    }, []);

    return settings;
}
