import { firebase } from '@firebase/app';
import '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBvkm8Aq8paJuMWMCWbx46C3NQRH7g9m-Q",
    authDomain: "barter-e7ac3.firebaseapp.com",
    projectId: "barter-e7ac3",
    storageBucket: "barter-e7ac3.appspot.com",
    messagingSenderId: "545589982977",
    appId: "1:545589982977:web:11279a9102c7e80ff38d00"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
