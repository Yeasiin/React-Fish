import Rebase from "re-base";
import firebase from "firebase";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkNHzcTJ4zEopiUA4R2Z66cko6DBVSC2U",
  authDomain: "nxt-catch-fish.firebaseapp.com",
  databaseURL: "https://nxt-catch-fish-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp, base };
// export default base;
