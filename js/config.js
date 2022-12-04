const firebaseConfig = {
    apiKey: "AIzaSyAD1FsL9VU_Vl87TYanRTbob26TzFLnxvw",
    authDomain: "practibus2.firebaseapp.com",
    databaseURL: "https://practibus2-default-rtdb.firebaseio.com",
    projectId: "practibus2",
    storageBucket: "practibus2.appspot.com",
    messagingSenderId: "660251322481",
    appId: "1:660251322481:web:4dd21c26822aae5c5bd3d0",
    measurementId: "G-NGRMTDN1CK"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

