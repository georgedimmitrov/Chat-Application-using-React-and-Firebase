import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD2WOCv02uCmpdMQ8_lRHvUrMD2ieQCvW8',
  authDomain: 'chat-app-3ef67.firebaseapp.com',
  databaseURL: 'https://chat-app-3ef67.firebaseio.com',
  projectId: 'chat-app-3ef67',
  storageBucket: 'chat-app-3ef67.appspot.com',
  messagingSenderId: '712430113876'
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
