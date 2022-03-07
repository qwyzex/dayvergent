import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import redirect from "../functions/redirect";
import useRedirectUser from "../hooks/useRedirectUser";
import useUserPresence from "../hooks/useUserPresence";

import { Input, NativeSelect, PasswordInput, Select, TextInput } from "@mantine/core";
import Head from "next/head";
import useUserDoc from "../hooks/useUserDoc";

export default function SignUp() {
    const { userDoc } = useUserDoc();

    const [signupError, setSignupError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [formValueEmail, setFormValueEmail] = useState("");
    const [formValuePassword, setFormValuePassword] = useState("");
    const [formValueUsername, setFormValueUsername] = useState("");
    const [formValueGender, setFormValueGender] = useState<
        "male" | "female" | "other" | ""
    >("");

    useEffect(() => {
        return () => {
            if (userDoc) redirect("/dashboard");
        };
    }, [userDoc]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        createUserWithEmailAndPassword(auth, formValueEmail, formValuePassword)
            .then(() => {
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        await setDoc(doc(db, `users/${user?.uid}`), {
                            username: formValueUsername,
                            email: formValueEmail,
                            uid: user?.uid,
                            password: Buffer.from(formValuePassword, "utf-8").toString(
                                "hex"
                            ),
                            gender: formValueGender,
                            account: {
                                private: false,
                            },
                        }).then(() => {
                            sessionStorage.setItem("newUser", "true");
                            redirect("/dashboard");
                        });
                        setLoading(false);
                    }
                });
            })
            .catch((err) => {
                setLoading(false);
                setSignupError(err.code);
            });
    };

    return (
        <div>
            <Head>
                <title>Sign Up</title>
            </Head>
            <h1>SIGN UP</h1>
            <h3>{signupError}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextInput
                        label="USERNAME"
                        type="text"
                        value={formValueUsername}
                        placeholder="Pick A Username"
                        onChange={(e) => setFormValueUsername(e.target.value)}
                    />
                </div>
                <div>
                    <TextInput
                        label="EMAIL"
                        type="email"
                        value={formValueEmail}
                        placeholder="Email Address"
                        onChange={(e) => setFormValueEmail(e.target.value)}
                    />
                </div>
                <div>
                    <PasswordInput
                        label="PASSWORD"
                        value={formValuePassword}
                        placeholder="Your password"
                        onChange={(e) => setFormValuePassword(e.target.value)}
                    />
                </div>
                <Select
                    data={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                    ]}
                    placeholder="Pick one"
                    label="What Is Your Gender"
                    value={formValueGender}
                    // @ts-ignore
                    onChange={(e) => setFormValueGender(e)}
                />
                <div>
                    <input
                        type="submit"
                        value={loading ? "Please Wait..." : "Continue"}
                    />
                </div>
            </form>
        </div>
    );
}
