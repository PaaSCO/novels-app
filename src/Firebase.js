import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
   apiKey: "AIzaSyDVYC1Kx5QzG6JEyD7fDutuBPNbSXUdCio",
  authDomain: "novels-app-fa995.firebaseapp.com",
  projectId: "novels-app-fa995",
  storageBucket: "novels-app-fa995.appspot.com",
  messagingSenderId: "620886525433",
  appId: "1:620886525433:web:86d68b122fccd61b7ae928",
  measurementId: "G-1MR2J3LFCG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);