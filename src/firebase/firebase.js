// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRMGYhPzVjl6J4qx3jo9g3r_aNWmiX5D0",
  authDomain: "pixvibe-79a9d.firebaseapp.com",
  projectId: "pixvibe-79a9d",
  storageBucket: "pixvibe-79a9d.appspot.com",
  messagingSenderId: "325107857033",
  appId: "1:325107857033:web:d8fd1d64e1995faa487858",
  measurementId: "G-93HPMKBL2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore= getFirestore(app);
const storage= getStorage(app);

export {app, auth, firestore, storage};
//const analytics = getAnalytics(app);

