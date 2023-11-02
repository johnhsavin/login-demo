import { initializeApp } from 'firebase/app'      // allows us to conect to app
import { getAuth} from 'firebase/auth'            // getting auth from firebase

const firebaseConfig = {                              // key credentials
  apiKey: "AIzaSyDOhdYXEK4wtxBy8De80-j_phzSDxltuzQ",
  authDomain: "fir-auth-jhs.firebaseapp.com",
  projectId: "fir-auth-jhs",                
  storageBucket: "fir-auth-jhs.appspot.com",
  messagingSenderId: "408853625808",
  appId: "1:408853625808:web:999a5ef75f0840316f57d5"
};

const app = initializeApp(firebaseConfig)       // connect to firebase project

export const auth = getAuth(app)                // connecting to auth part of project and exporting

