import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD6owsDDJixXKxat_LHLdgffkA4AzhmwQ4",
  authDomain: "empyrean-supplements.firebaseapp.com",
  projectId: "empyrean-supplements",
  storageBucket: "empyrean-supplements.appspot.com",
  messagingSenderId: "744920743486",
  appId: "1:744920743486:web:e73ad349c9c4f027a71b6f",
  measurementId: "G-S39MPMGP5T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);