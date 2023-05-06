import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Note: "etsuji-react-test" is a non-existent project.
const firebaseConfig = {
  apiKey: "AIzaSyB6PwHn0o-Bbt3zl4QpG9p6ohonL1Mjuiw",
  authDomain: "flutter-firebase-realtime-app.firebaseapp.com",
  projectId: "flutter-firebase-realtime-app",
  storageBucket: "flutter-firebase-realtime-app.appspot.com",
  messagingSenderId: "85187679574",
  appId: "1:85187679574:web:b4190756e02df61ae8f2f7",
  measurementId: "G-PY4PKVEKHL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // Handle redirection to other website
    window.location.assign("http://localhost:8080/#exams");
    
  })
    .catch((error) => {console.log(error)})
};

export const projectId = firebaseConfig.projectId;

// If you want to add a handler.
//
// export const signInHandler = () => {
//   console.log("Logged in bitch");
// }

// export const signInWithGoogle = (handler) => {
//  return () => {
//    signInWithPopup(auth, provider).then(handler)
//    .catch((error) => {console.log(error)})
//  };
// };
