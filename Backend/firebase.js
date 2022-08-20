const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");

console.log(process.env.FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyA0a17HJeyExkCSUZl_JptG9EB9syWExXQ",
  authDomain: "mlh-2022.firebaseapp.com",
  projectId: "mlh-2022",
  storageBucket: "mlh-2022.appspot.com",
  messagingSenderId: "817916974982",
  appId: "1:817916974982:web:424f63c750659d9db5be07",
  measurementId: "G-JRQRPV2DQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

auth.languageCode = "it";
module.exports = { auth, db };
