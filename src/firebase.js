// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXgvX-D12eBrjKQuR5I_qLrc8ZeNKXEfg",
  authDomain: "tiktokappclone-b40e4.firebaseapp.com",
  projectId: "tiktokappclone-b40e4",
  storageBucket: "tiktokappclone-b40e4.appspot.com",
  messagingSenderId: "224432911126",
  appId: "1:224432911126:web:f482c0f923631fa934d637"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const db = app.firestore()
export default db