import useUserTicket from "../hooks/useUserTicket";
import useUserDoc from "../hooks/useUserDoc";

export default function Greetings({ closed }: any) {
    const clientTicket = useUserTicket();
    const { userDoc } = useUserDoc();

    if (!clientTicket.closeGreeting) {
        if (sessionStorage.getItem("newUser") === "true") {
            return (
                <div>
                    <h5>Hey New User</h5>
                    <button onClick={() => localStorage.setItem("closeGreeting", "true")}>
                        CLOSE
                    </button>
                </div>
            );
        } else if (clientTicket.offThanADay && userDoc) {
            return (
                <div>
                    <h5>Welcome Back, {userDoc?.username}</h5>
                    <button onClick={() => localStorage.setItem("closeGreeting", "true")}>
                        CLOSE
                    </button>
                </div>
            );
        } else return null;
    } else return null;
}
