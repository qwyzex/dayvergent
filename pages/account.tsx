import Image from "next/image";
import { useEffect } from "react";
import useUserDoc from "../hooks/useUserDoc";

export default function Account() {
    const { userDoc } = useUserDoc();

    return (
        <div>
            <h1>ACCOUNT PAGE</h1>
            {userDoc ? (
                <section>
                    <div>
                        <img
                            src={`https://i.pravatar.cc/90`}
                            alt="User Profile Photo"
                            width={90}
                            height={90}
                        />
                    </div>
                    <div>
                        <label>name</label>
                        <h1>{userDoc?.username}</h1>
                    </div>
                    <div>
                        <label>email</label>
                        <h1>{userDoc?.email}</h1>
                    </div>
                    <div>
                        <label>uid</label>
                        <h1>{userDoc?.uid}</h1>
                    </div>
                </section>
            ) : (
                "Loading..."
            )}
        </div>
    );
}
