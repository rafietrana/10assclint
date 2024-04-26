 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 
const firebaseConfig = {
  apiKey: "AIzaSyAYO-jphy655fy7WgIgZ4b7zt0quddyPlc",
  authDomain: "my-assignment-10-817bb.firebaseapp.com",
  projectId: "my-assignment-10-817bb",
  storageBucket: "my-assignment-10-817bb.appspot.com",
  messagingSenderId: "541042333364",
  appId: "1:541042333364:web:ce998ad692bdae260f69e1"
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

