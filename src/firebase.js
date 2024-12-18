// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcbhB_1U9eEcuuNbSoWNIYV2xWHRFzT3s",
  authDomain: "pet-feeder-befa9.firebaseapp.com",
  databaseURL: "https://pet-feeder-befa9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pet-feeder-befa9",
  storageBucket: "pet-feeder-befa9.firebasestorage.app",
  messagingSenderId: "762994654965",
  appId: "1:762994654965:web:f1795703d7915dae308fbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
