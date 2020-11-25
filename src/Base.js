import firebase from 'firebase/app';
import 'firebase/auth';


 
const app = firebase.initializeApp( {
  apiKey: "AIzaSyDf7OFksH2gyFc6q3_LGlETQwu2ART6V7M",
  authDomain: "training-app-73a9e.firebaseapp.com",
  databaseURL: "https://training-app-73a9e.firebaseio.com",
  projectId: "training-app-73a9e",
  storageBucket: "training-app-73a9e.appspot.com",
  messagingSenderId: "1098661778428",
  appId: "1:1098661778428:web:72c962a4d23e094e4d9879"
})

export default app