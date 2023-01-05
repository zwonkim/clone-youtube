import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

export const app = initializeApp(firebaseConfig);

//로그인, 로그아웃
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = () => {
  return signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  console.log("logout");
  signOut(auth).catch(console.error);
};
