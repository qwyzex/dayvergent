import { DocumentData, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Dispatch, SetStateAction } from "react";
import useError from "../../../hooks/useError";

export interface togglePrivateAccountProps {}

export default async function togglePrivateAccount(
    userDoc: DocumentData | null | undefined,
    setLoading: Dispatch<SetStateAction<boolean>>
) {
    if (
        confirm(
            userDoc?.account.private
                ? "Are you sure you want to make this account public?"
                : "Are you sure you want to make this account private?"
        )
    ) {
        setLoading(true);
        await updateDoc(doc(db, `users/${userDoc?.uid}`), {
            account: {
                private: !userDoc?.account.private,
            },
        })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.warn(err.message);
                setLoading(false);
            });
    } else {
        return;
    }
}
