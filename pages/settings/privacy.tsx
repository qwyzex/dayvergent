import { updateCurrentUser } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import SettingsItem from "../../components/settings/SettingsItem";
import { auth, db } from "../../firebase";
import useUserPresence from "../../hooks/useUserPresence";
import userDocTemplate from "../../template/userDocTemplate";

export default function Privacy() {
    const { userDoc, userData } = useUserPresence();

    return (
        <div>
            <SettingsItem
                title="Private Account"
                description="Public user will not able to see your profile"
            >
                <input
                    type={"checkbox"}
                    checked={userDocTemplate.account.private}
                    onChange={async () => {
                        await updateDoc(doc(db, `users/${userData?.uid}`), {
                            account: {
                                private: !userDocTemplate.account.private,
                            },
                        });
                    }}
                />
            </SettingsItem>
        </div>
    );
}
