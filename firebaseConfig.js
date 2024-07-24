import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmQ-Xc4qOUxGBlZ3eAVwB6bdsH_7a0TyM",
  appId: '1:324622291395:android:eccac60dedc7cdb2b46d76',
  storageBucket: 'gs://finances-app-project.appspot.com',
};

export const firebaseApp = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
