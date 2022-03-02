import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBB8f-dS-A3gg3jBolNG6pzKHlN5YSRlQc",
    authDomain: "day-vergent-qwyzex.firebaseapp.com",
    projectId: "day-vergent-qwyzex",
    storageBucket: "day-vergent-qwyzex.appspot.com",
    messagingSenderId: "618395344379",
    appId: "1:618395344379:web:9797953eade477c0bd3f5e",
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
