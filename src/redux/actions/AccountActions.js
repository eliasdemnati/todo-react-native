import firebase from '../../services/firebase';

export const createAccountAction = (
  email,
  password,
  displayName
) => async dispatch => {
  try {
    console.log(displayName);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        firebase.auth().onAuthStateChanged(user => {
          user.updateProfile({ displayName });
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: user,
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  } catch (err) {
    dispatch({
      type: 'LOGIN_ERROR',
      payload: err,
    });
  }
};

export const loginAccountAction = (email, password) => async dispatch => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        firebase.auth().onAuthStateChanged(user => {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: user,
          });
        });
      });
  } catch (err) {
    dispatch({
      type: 'LOGIN_ERROR',
      payload: err,
    });
  }
};
