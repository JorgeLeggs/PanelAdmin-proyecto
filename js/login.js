function login() {
    let email = document.getElementById("correo").value;
    let password = document.getElementById("contraseña").value;
    console.log(email);
    console.log(password);
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

}

