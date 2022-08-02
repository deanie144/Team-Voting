import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBfBDEpPxI7dIQ4s7B89PxriOjvqpA29BU",
    authDomain: "team-voting-6009d.firebaseapp.com",
    projectId: "team-voting-6009d",
    storageBucket: "team-voting-6009d.appspot.com",
    messagingSenderId: "129078315716",
    appId: "1:129078315716:web:c3c66411555a0facdc9791",
    measurementId: "G-CMWBXRQ9Z6"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();