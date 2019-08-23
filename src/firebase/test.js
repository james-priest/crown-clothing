import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// these are return queryRefs
const docRef1 = firestore
  .collection('users')
  .doc('ZoaQKHLYwjflzfRPo9LfkSl6JML2')
  .collection('cartItems')
  .doc('1234');

const docRef2 = firestore.doc(
  '/users/ZoaQKHLYwjflzfRPo9LfkSl6JML2/cartItems/1234'
);

const colRef1 = firestore.collection(
  '/users/ZoaQKHLYwjflzfRPo9LfkSl6JML2/cartItems'
);
