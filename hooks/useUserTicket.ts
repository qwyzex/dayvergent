import { useEffect, useState } from "react";

export default function useUserTicket() {
    const [text, setText] = useState("");
    const [offThanADay, setOffThanADay] = useState<boolean>(false);
    const [closeGreeting, setCloseGreeting] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            let lastTimeSignedIn = localStorage.getItem("lastTimeSignedIn");
            if (lastTimeSignedIn) {
                setText(lastTimeSignedIn);

                let today: number = Date.parse(new Date().toDateString());
                let oneDayMS = 1000 * 60 * 60 * 24;
                let yesterday: number = today - oneDayMS;

                if (parseInt(lastTimeSignedIn) < yesterday) {
                    setOffThanADay(true);
                    localStorage.setItem("offThanOneDay", "true");

                    let cg = localStorage.getItem("closeGreeting");
                    if (cg === "true") {
                        setCloseGreeting(false);
                        localStorage.setItem("closeGreeting", "false");
                    }
                } else {
                    localStorage.setItem("offThanOneDay", "false");
                }
            }
        };
    }, []);

    useEffect(() => {
        return () => {
            let cg = localStorage.getItem("closeGreeting");
            if (cg && cg === "true") {
                setCloseGreeting(true);
            }
        };
    }, [closeGreeting]);

    return { text, offThanADay, closeGreeting };
}
