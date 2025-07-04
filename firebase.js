import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc_6zYXYpSz4RNF40ciONiCxFe8NXKe28",
  authDomain: "ai-note-assistant-7a742.firebaseapp.com",
  projectId: "ai-note-assistant-7a742",
  storageBucket: "ai-note-assistant-7a742.firebasestorage.app",
  messagingSenderId: "1073603923800",
  appId: "1:1073603923800:web:5015ba1d053486a5189f2d",
  measurementId: "G-NGKK5WF1NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };