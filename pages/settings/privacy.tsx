import { Checkbox, LoadingOverlay } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { updateCurrentUser } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import SettingsItem from "../../components/settings/SettingsItem";
import SVG from "../../components/svg";
import { auth, db } from "../../firebase";
import firerr from "../../functions/error/firerr";
import togglePrivateAccount from "../../functions/settings/privacy/togglePrivateAccount";
import useError from "../../hooks/useError";
import useUserPresence from "../../hooks/useUserPresence";

export default function Privacy() {
    const { userDoc, userData } = useUserPresence();

    const [privateAccountLoading, setPrivateAccountLoading] = useState(false);

    const error = useError();

    const notif = useNotifications();

    useEffect(() => {
        error.current &&
            notif.showNotification({
                title: "Error",
                message: firerr(error.current),
                icon: <SVG.WarningOutline />,
            });
    }, [error]);

    return (
        <div>
            <SettingsItem
                title="Private Account"
                description="Public user will not able to see your profile"
            >
                <LoadingOverlay
                    overlayOpacity={0.6}
                    overlayColor="var(--back-c)"
                    visible={privateAccountLoading}
                />
                <Checkbox
                    checked={userDoc?.account.private}
                    disabled={privateAccountLoading}
                    onChange={() =>
                        togglePrivateAccount(userDoc, setPrivateAccountLoading).catch(
                            (err) => {
                                error.setCurrent(err.code);
                            }
                        )
                    }
                />
            </SettingsItem>
        </div>
    );
}
