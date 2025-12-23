// /menu/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-yuswQLjlv5BniIyi5MmshBEZEWo2Xew",
  authDomain: "martin-32c97.firebaseapp.com",
  projectId: "martin-32c97",
  appId: "1:283740635140:web:6cd96091b3875372997551"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);