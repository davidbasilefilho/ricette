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
            if (error instanceof Error) {
                console.error("Sign In error: ", error);
                res = error.message;
            }
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
            if (error instanceof Error) {
                console.error("Log in error: ", error);
                res = error.message;
            }
        });
    return res != "" ? res : "Unknown Status";
}

export function setOrCreateUserDocument(user: User, userData?: UserData) {
    setDoc(
        doc(db, "users", user.uid),
        userData ??
            ({
                uid: user.uid,
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
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data as unknown as UserData;
            }
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
        }
    }
    return undefined;
}

export type UserData = {
    uid: string;
    name: string;
    saved: string[];
    likes: string[];
    dislikes: string[];
};

// Firebase não quis funcionar então fiz um db fake
let users: UserData[] | undefined = undefined;

export function addUserDocument(user: User, userData: UserData) {
    if (!users) {
        users = [userData];
    } else {
        users = [...users, userData];
    }
}

export function setUserDocument(uid: string, data: UserData) {
    users?.forEach((user) => {
        if (user.uid === uid) {
            user.likes = data.likes;
            user.name = data.name;
            user.dislikes = data.dislikes;
            user.saved = data.saved;
        }
    });
}

export function getUserDocumentById(uid: string): UserData | undefined {
    return users?.find((user) => user.uid === uid);
}
