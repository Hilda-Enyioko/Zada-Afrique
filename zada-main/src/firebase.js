// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdl4VekJZ6izHyqdHwRcUUBDGwcxw2Kgg",
authDomain: "zada-afrique.firebaseapp.com",
  projectId: "zada-afrique",
storageBucket: "zada-afrique.firebasestorage.app",
  messagingSenderId: "1006474215618",
  appId: "1:1006474215618:web:9608b364bc52dd32213b5b"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database instance
export const db = getFirestore(app);