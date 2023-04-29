import { secrets } from "./secrets";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: cert(secrets),
});

export const db = getFirestore();
