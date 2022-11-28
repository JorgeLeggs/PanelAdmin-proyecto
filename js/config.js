

const firebaseConfig = {
    apiKey: "AIzaSyAA5M0eFAvcGGOfY45dVkqPfUA1PGjNx7U",
    authDomain: "pruebaweb-363606.firebaseapp.com",
    projectId: "pruebaweb-363606",
    storageBucket: "pruebaweb-363606.appspot.com",
    messagingSenderId: "851318074247",
    appId: "1:851318074247:web:e5ab68fa101daa8f1b4122"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

