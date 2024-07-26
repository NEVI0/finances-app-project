import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import googleService from './google-services.json';

// Initialize Firebase
const firebaseConfig = {
  projectId: googleService.project_info.project_id,
  apiKey: googleService.client[0].api_key[0].current_key,
  appId: googleService.client[0].client_info.mobilesdk_app_id,
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDatabase = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
