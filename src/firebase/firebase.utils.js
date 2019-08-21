import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyASDQRXc7hWYncV_x7oCAVbYUVcpFHvHvA',
  authDomain: 'crown-db-4a666.firebaseapp.com',
  databaseURL: 'https://crown-db-4a666.firebaseio.com',
  projectId: 'crown-db-4a666',
  storageBucket: '',
  messagingSenderId: '272818249661',
  appId: '1:272818249661:web:857dbd91088b92e4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

// const ghAuthProvider = new firebase.auth.GithubAuthProvider();

export default firebase;
