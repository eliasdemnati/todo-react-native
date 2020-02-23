import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBu4NYuL88m15zIAij5zzzrw9_P7vcL-PA',
  authDomain: 'todo-react-native-6b6c9.firebaseapp.com',
  databaseURL: 'https://todo-react-native-6b6c9.firebaseio.com',
  projectId: 'todo-react-native-6b6c9',
  storageBucket: 'todo-react-native-6b6c9.appspot.com',
  messagingSenderId: '181392887467',
  appId: '1:181392887467:web:d1c87630a7e63e1897b1ee',
  measurementId: 'G-STLT62GPNT',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
