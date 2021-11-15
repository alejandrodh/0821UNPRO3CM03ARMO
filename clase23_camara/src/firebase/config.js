import app from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZpovkOZVGEQSt7nyiogD48KV9keCAEb4",
  authDomain: "unpro3tm03.firebaseapp.com",
  projectId: "unpro3tm03",
  storageBucket: "unpro3tm03.appspot.com",
  messagingSenderId: "1039144005784",
  appId: "1:1039144005784:web:552580a152c0443250a0ed"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = app.firestore();