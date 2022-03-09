import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";
import useUserPresence from "../../hooks/useUserPresence";

export default function JournalForm() {
    const { userData } = useUserPresence();
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        await setDoc(
            doc(
                db,
                `users/${userData?.uid}/journal/${value
                    .toLowerCase()
                    .replace(" ", "-")}-${Math.random() * 20000000000000000}`
            ),
            {
                name: value,
                favorite: false,
                date: "",
                tag: [],
            }
        )
            .then(() => {
                setLoading(false);
            })
            .catch((err) => alert(err.message));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <input type="submit" value={loading ? "Wait..." : "add jornak"} />
        </form>
    );
}
