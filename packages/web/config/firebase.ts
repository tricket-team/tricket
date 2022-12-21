import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBVxZZ4_6y2XJ4v5ymrGJMkCjaDxSynxn0",
  authDomain: "tricket-team.firebaseapp.com",
  projectId: "tricket-team",
  storageBucket: "tricket-team.appspot.com",
  messagingSenderId: "857212407654",
  appId: "1:857212407654:web:205ea4dc87412d084c42a7"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
