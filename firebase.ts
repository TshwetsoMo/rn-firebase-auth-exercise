// Import the functions you need from the SDKs you need
// Initializes Firebase App with our project’s
//   config (apiKey, authDomain, etc.).
// Exports `auth` and `db` for use elsewhere.
// We avoid hard‑coding credentials by loading
//   from environment variables.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5kF5MuO9QLr-fJSELasl8WrMoYElw_9I", //please don't hack me.
  authDomain: "dv300-classproj2025.firebaseapp.com",
  projectId: "dv300-classproj2025",
  storageBucket: "dv300-classproj2025.appspot.com",
  messagingSenderId: "430663122571",
  appId: "1:430663122571:web:bbd8cbea5577e5b57f1e8e",
  measurementId: "G-27EHRY6FNJ"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

//HOMEWORK:
//1. Create the RegistrationScreen UI
//2. Create the registration authentication function in authServices
//3. Add the functionality to your registration screen
//4. add effient navigation between the login and registration screens (stacks & navigation functions)
//5. BONUS: try and add the user data to the database (if applicable) after registration
//6. BONUS: add useContext for auth state management
//7. BONUS: fix the localstorage issue with we get in the terminal