import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/functions';

const config = {
    apiKey: "AIzaSyBAsvPtijTjErFjobAYP9e-yhgHCOqvspY",
    authDomain: "covid-management-systems.firebaseapp.com",
    projectId: "covid-management-systems",
    storageBucket: "covid-management-systems.appspot.com",
    messagingSenderId: "211319233570",
    appId: "1:211319233570:web:4a904c83da38762e9efe7b",
    measurementId: "G-4H2H7SR3ZM"
};

const firebase = Firebase.initializeApp(config);

export const auth = Firebase.auth()
export { firebase };