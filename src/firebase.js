import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyArGeHaWkZ3wIvfXJUROUKdxZfEw73j5HM",
//   authDomain: "quora-clone-1b761.firebaseapp.com",
//   databaseURL: "https://quora-clone-1b761-default-rtdb.firebaseio.com",
//   projectId: "quora-clone-1b761",
//   storageBucket: "quora-clone-1b761.appspot.com",
//   messagingSenderId: "5474927088",
//   appId: "1:5474927088:web:7dff5a7f8b5e9b5d575d35",
//   measurementId: "G-RS6THMYKEZ",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4AthTdDQFx8QcbHyD4V_mDkVvSfDC6kQ",
  authDomain: "quora-clone-9ab4c.firebaseapp.com",
  projectId: "quora-clone-9ab4c",
  storageBucket: "quora-clone-9ab4c.appspot.com",
  messagingSenderId: "617455548741",
  appId: "1:617455548741:web:7dcdf571b0e11c12f2a62c",
  measurementId: "G-JS7N2P77WS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
