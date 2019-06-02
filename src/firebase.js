import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'chat-app-react-firebase-972c5.firebaseapp.com',
  databaseURL: 'https://chat-app-react-firebase-972c5.firebaseio.com',
  projectId: 'chat-app-react-firebase-972c5',
  storageBucket: 'chat-app-react-firebase-972c5.appspot.com',
  messagingSenderId: '284826393487',
  appId: '1:284826393487:web:78f0ac0651e77211'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
