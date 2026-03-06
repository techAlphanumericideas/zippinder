import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuj7HGRuGyVtqFYhFTxXIO2O96fkPbhIQ",
  authDomain: "zippinder-97d4a.firebaseapp.com",
  projectId: "zippinder-97d4a",
  storageBucket: "zippinder-97d4a.firebasestorage.app",
  messagingSenderId: "945267488088",
  appId: "1:945267488088:web:6d8d19b9769800040c612d",
  measurementId: "G-7J7ZSLMXHM",
};

// Initialize Firebase securely avoiding multiple initializations in dev mode
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize analytics only on client side
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
