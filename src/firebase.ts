import { initializeApp, FirebaseOptions } from "firebase/app";
import { config } from "dotenv";

const result = config();
if (result.error) {
    throw result.error;
}

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
};
