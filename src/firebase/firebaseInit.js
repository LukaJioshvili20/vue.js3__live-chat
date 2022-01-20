import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    // Your Firebase Key here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();