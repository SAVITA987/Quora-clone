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
  apiKey: "AIzaSyB4ZDCM2CQm-sXZxJQdH9ynsfpgEVVp46A",
  authDomain: "quora-clone-c713d.firebaseapp.com",
  projectId: "quora-clone-c713d",
  storageBucket: "quora-clone-c713d.appspot.com",
  messagingSenderId: "122219076232",
  appId: "1:122219076232:web:a4f090f9f57a073595dd3d",
  measurementId: "G-RN9N0MRPY1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
