import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDuGrB_n13joWsJumEuO-0qfTf384moX2c",
  authDomain: "vfire-todo.firebaseapp.com",
  databaseURL: "https://vfire-todo.firebaseio.com",
  projectId: "vfire-todo",
  storageBucket: "vfire-todo.appspot.com",
  messagingSenderId: "423945170905",
  appId: "1:423945170905:web:41df27834cfb71f1d233c8"
};

  export const db = firebase.initializeApp(firebaseConfig).firestore();