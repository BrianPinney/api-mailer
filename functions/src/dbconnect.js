import { secrets } from "../secrets.js";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: cert(secrets),
});

export const db = getFirestore();
