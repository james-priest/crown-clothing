import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyASDQRXc7hWYncV_x7oCAVbYUVcpFHvHvA',
  authDomain: 'crown-db-4a666.firebaseapp.com',
  databaseURL: 'https://crown-db-4a666.firebaseio.com',
  projectId: 'crown-db-4a666',
  storageBucket: '',
  messagingSenderId: '272818249661',
  appId: '1:272818249661:web:857dbd91088b92e4'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get docRef from 'users' collection with the given 'uid'
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);

  // Get snapshot of user document from docRef
  const snapShot = await userRef.get();
  // console.log(snapShot);

  // if the record doesn't exist then .set() it
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const glProvider = new firebase.auth.GoogleAuthProvider();
glProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(glProvider);

// GitHub Authentication
// const ghProvider = new firebase.auth.GithubAuthProvider();

export default firebase;
