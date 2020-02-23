import firebase from '../../services/firebase';

export const addTaskAction = (img, description) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`users/${userId}/tasks/`)
    .push({
      img,
      description,
      done: false,
    });
  dispatch({
    type: 'ADD_TASK_SUCCESS',
  });
};

export const markAsDoneAction = () => {};

export const fetchListAction = () => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`users/${userId}/tasks/`)
    .once('value')
    .then((snapshot) => {
      const lists = snapshot.val();
      const tasks = [];
      Object.values(lists).forEach((value) => {
        tasks.push(value);
      });
      dispatch({
        type: 'FETCH_TASKS_SUCCESS',
        payload: tasks,
      });
    });
};
