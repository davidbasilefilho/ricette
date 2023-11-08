import { initializeApp, FirebaseOptions } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    User,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Eu tentei meu máximo para fazer
// o react-native-dotenv funcionar
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBWBuovCqPbtXeyCBBhnjG08IPiBKKUaPs",
    authDomain: "ricette-dev.firebaseapp.com",
    appId: "1:766419493974:web:d0f6b7281c0332405d07f7",
    databaseURL: "https://ricette-dev-default-rtdb.firebaseio.com",
    measurementId: "G-2K72MBHFNW",
    messagingSenderId: "766419493974",
    projectId: "ricette-dev",
    storageBucket: "ricette-dev.appspot.com",
};

export const app = initializeApp(firebaseConfig, "Ricette");
export const auth = getAuth(app);
export const db = getFirestore(app);

export let user: User;

export function signIn(email: string, pass: string): string {
    let res = "";
    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            user = userCredential.user;
            res = "Success";
        })
        .catch((error) => {
            console.error("Sign In error: ", error);
            res = error.message;
        });
    return res != "" ? res : "unknown";
}

export function logIn(email: string, pass: string): string {
    let res = "";
    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            user = userCredential.user;
            res = "Success";
        })
        .catch((error) => {
            console.error("Log in error: ", error);
            res = error.message;
        });
    return res != "" ? res : "unknown";
}

export function setOrCreateUserDocument(user: User, userData?: UserData) {
    setDoc(
        doc(db, "users", user.uid),
        userData ??
            ({
                name: "",
                saved: [],
                likes: [],
                dislikes: [],
            } as UserData)
    );
}

export async function getUserData(user: User): Promise<UserData | undefined> {
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA|;");
            return docSnap.data as unknown as UserData;
        }
    }
    return undefined;
}

export type UserData = {
    name: string;
    saved: string[];
    likes: string[];
    dislikes: string[];
};
