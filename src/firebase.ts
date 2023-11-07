import { initializeApp, FirebaseOptions } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    User,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Config from "react-native-config";

const firebaseConfig: FirebaseOptions = {
    apiKey: Config.API_KEY,
    authDomain: Config.AUTH_DOMAIN,
    appId: Config.APP_ID,
    databaseURL: Config.DATABASE_URL,
    measurementId: Config.MEASUREMENT_ID,
    messagingSenderId: Config.MESSAGING_SENDER_ID,
    projectId: Config.PROJECT_ID,
    storageBucket: Config.STORAGE_BUCKET,
};

export const app = initializeApp(firebaseConfig, "Ricette");
export const auth = getAuth(app);
export const db = getFirestore(app);

export function signIn(email: string, pass: string) {
    createUserWithEmailAndPassword(auth, email, pass).catch((error) => {
        console.error("Sign In error: ", error);
    });
}

export function logIn(email: string, pass: string) {
    signInWithEmailAndPassword(auth, email, pass).catch((error) => {
        console.error("Log in error: ", error);
    });
}

export async function setOrCreateUserDocument(user: User, userData?: UserData) {
    if (user) {
        await setDoc(
            doc(db, "users", user.uid),
            userData ??
                ({
                    name: "",
                    saved: [],
                    likes: [],
                    dislikes: [],
                } as UserData)
        );
    } else {
        console.error("Argument 'user' is not valid / is null");
    }
}

export type UserData = {
    name: string;
    saved: string[];
    likes: string[];
    dislikes: string[];
};
