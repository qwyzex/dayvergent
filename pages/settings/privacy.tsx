import {
    Checkbox,
    CheckboxIcon,
    Code,
    LoadingOverlay,
    Popover,
    Tooltip,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { updateCurrentUser } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
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
    const [showUID, setShowUID] = useState(false);

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
            <h5 style={{ marginTop: "10px" }}>Information</h5>
            <Divider />
            <SettingsItem title="USER UID">
                <Tooltip
                    opened={showUID}
                    position="top"
                    transition={"pop"}
                    withArrow
                    label={userData?.uid}
                >
                    <Button onClick={() => setShowUID(!showUID)} active={showUID}>
                        SHOW
                    </Button>
                </Tooltip>
                <Button
                    onClick={() => {
                        navigator.clipboard.writeText(userData!.uid);
                        notif.showNotification({
                            title: "UID COPPIED",
                            message: "Successfully copy the UID!",
                            color: "lime",
                        });
                    }}
                    general
                >
                    COPY
                </Button>
            </SettingsItem>
            <SettingsItem title="AUTH TOKEN">
                <Button
                    onClick={() => {
                        userData?.getIdToken().then((res) => {
                            navigator.clipboard.writeText(res);
                            notif.showNotification({
                                title: "AUTH TOKEN COPPIED",
                                message:
                                    "Successfully copy the TOKEN! Don't share the token with anyone!",
                                color: "lime",
                            });
                        });
                    }}
                    general
                >
                    COPY
                </Button>
            </SettingsItem>
        </div>
    );
}
