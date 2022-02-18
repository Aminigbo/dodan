import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQvdplCzHhl3dzXyZu-UPDynlUjxxFIao",
  authDomain: "dodan-49338.firebaseapp.com",
  projectId: "dodan-49338",
  storageBucket: "dodan-49338.appspot.com",
  messagingSenderId: "128080491041",
  appId: "1:128080491041:web:3c5f30820081411b632960",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
