import {
    GithubAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import redirect from "../functions/redirect";
import useRedirectUser from "../hooks/useRedirectUser";

export default function Login() {
    useRedirectUser();

    function loginGithub() {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider);
    }

    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");

    return (
        <div>
            <h1>Login With GitHub</h1>
            <button onClick={loginGithub}>AUTHENTICATE</button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    signInWithEmailAndPassword(auth, formEmail, formPassword)
                        .then(() => {
                            redirect("/");
                        })
                        .catch((err) => {
                            alert(err.message);
                        });
                }}
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formPassword}
                    onChange={(e) => setFormPassword(e.target.value)}
                />
                <input type="submit" value="SIGN IN" />
            </form>
        </div>
    );
}
