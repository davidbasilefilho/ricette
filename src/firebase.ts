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

export async function checkIfUserIsSetUp(user: User): Promise<bool> {
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        }
    }

    return null;
}

export type UserData = {
    name: string;
    saved: string[];
    likes: string[];
    dislikes: string[];
};
