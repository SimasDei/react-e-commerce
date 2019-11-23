import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

export function* signInWithgoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithgoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
