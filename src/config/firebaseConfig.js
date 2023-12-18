import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQ6LwGGLuVGTrK_eq6knsDZp7xNJypu00",
    authDomain: "regalo-78780.firebaseapp.com",
    projectId: "regalo-78780",
    storageBucket: "regalo-78780.appspot.com",
    messagingSenderId: "829334991",
    appId: "1:829334991:web:4107c48af6b74eaddcdeba",
    measurementId: "G-CH881SCMC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// gives us an auth instance
export const auth = getAuth(app);

// in order to use this auth instance elsewhere
//export default { auth };