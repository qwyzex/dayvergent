import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";
import useUserPresence from "../../hooks/useUserPresence";
import styles from "../../styles/Forms/Journal.module.sass";
import { v4 } from "uuid";
import DayVFormInterface from "../../types/DayVFormInterface";

export default function JournalForm({ setDraft }: DayVFormInterface) {
    const { userData } = useUserPresence();
    const [loading, setLoading] = useState(false);

    const [formValueTitle, setFormValueTitle] = useState("");
    const [formValueBody, setFormValueBody] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        await setDoc(doc(db, `users/${userData?.uid}/journal/${v4()}`), {
            name: formValueTitle,
            body: formValueBody,
            favorite: false,
            date: "",
            tag: [],
        })
            .then(() => {
                setFormValueBody("");
                setFormValueTitle("");
                setLoading(false);
                setDraft && setDraft(false);
            })
            .catch((err) => alert(err.message));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>TITLE</label>
                <input
                    type="text"
                    value={formValueTitle}
                    onChange={(e) => {
                        setFormValueTitle(e.target.value);
                        setDraft && setDraft(true);
                    }}
                    placeholder="Your journal title"
                    autoFocus
                    data-autofocus
                />
            </div>
            <div>
                <label>Story / Description</label>
                <input
                    type="text"
                    value={formValueBody}
                    onChange={(e) => {
                        setFormValueBody(e.target.value);
                        setDraft && setDraft(true);
                    }}
                    placeholder="Your journal story"
                />
            </div>
            <footer>
                <input type="submit" value={loading ? "Wait..." : "Add Journal"} />
            </footer>
        </form>
    );
}
