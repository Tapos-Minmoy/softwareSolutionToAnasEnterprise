import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP_4pM1rD5Zykt3aDg6vtEpLYaYTXaVNo",
  authDomain: "react-authentication-e3cef.firebaseapp.com",
  projectId: "react-authentication-e3cef",
  storageBucket: "react-authentication-e3cef.appspot.com",
  messagingSenderId: "727298102510",
  appId: "1:727298102510:web:991a46dee0163b32e38fff",
  measurementId: "G-GHS85WGK53"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;