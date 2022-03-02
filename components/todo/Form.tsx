import { useState } from "react";
import useUserPresence from "../../hooks/useUserPresence";

import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default function TodoForm() {
    const user = useUserPresence();

    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        await setDoc(doc(db, `users/${user.userData?.uid}/items/todo`), {
            name: value,
            done: false,
            pin: false,
            favorite: false,
            tag: [],
        })
            .then(() => {
                setLoading(false);
                setValue("");
            })
            .catch((err) => {
                setLoading(false);
                alert(err.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div>
                <input
                    type={"submit"}
                    value={loading ? "Wait..." : "Add"}
                    placeholder="What To Do?"
                />
            </div>
        </form>
    );
}
