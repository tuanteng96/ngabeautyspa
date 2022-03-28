import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA1jO4HJcVZmxOGmLUm-_OPIlqYn3dCj2A",
    authDomain: "ngabeautyspa-ecacc.firebaseapp.com",
    projectId: "ngabeautyspa-ecacc",
    storageBucket: "ngabeautyspa-ecacc.appspot.com",
    messagingSenderId: "33620889792",
    appId: "1:33620889792:web:94190585a51bf700045d25",
    measurementId: "G-MG7E6WL590"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };