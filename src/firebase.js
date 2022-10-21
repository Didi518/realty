// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpSWnew0yL8YJRSxVmlZgsAHI46T13XDk',
  authDomain: 'realty-react.firebaseapp.com',
  projectId: 'realty-react',
  storageBucket: 'realty-react.appspot.com',
  messagingSenderId: '391738807938',
  appId: '1:391738807938:web:87097d38a6f5650081c69b',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
