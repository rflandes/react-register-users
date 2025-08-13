// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKy0A9Y-lMKZL7L0eBJtBJLXqKwjeYVpc",
  authDomain: "upchcongreso.firebaseapp.com",
  projectId: "upchcongreso",
  storageBucket: "upchcongreso.firebasestorage.app",
  messagingSenderId: "622034979171",
  appId: "1:622034979171:web:fd5ba2bc2b63e454896b56"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);