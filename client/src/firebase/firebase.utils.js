import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXMwuDgdENngg4mtnEuj8oun3anPRwF_o',
  authDomain: 'react-e-commerce-b3899.firebaseapp.com',
  databaseURL: 'https://react-e-commerce-b3899.firebaseio.com',
  projectId: 'react-e-commerce-b3899',
  storageBucket: 'react-e-commerce-b3899.appspot.com',
  messagingSenderId: '893908218173',
  appId: '1:893908218173:web:03a3bb754e85b8a3239554',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionallData) => {
  if (!userAuth) return;
  try {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionallData,
        });
      } catch (error) {
        throw new Error(error);
      }
    }
    return userRef;
  } catch (error) {
    throw new Error(error);
  }
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  try {
    await batch.commit();
  } catch (error) {
    throw new Error(error);
  }
};

/**
 *
 * @param {String} collections firebase collection Reference
 * @return {Array} returns handled collection
 */
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
