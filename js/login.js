const loginform = document.querySelector('formulario_login');
const MSJERROR =()=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ha ocurrido un error!'
  })
}





//function to get a specific field from a document in firestore
function getDocField(){
  
  const email = document.getElementById("correo").value;
  const password = document.getElementById("contraseña").value;
  
  var docRef = db.collection("usuarios").doc((document.getElementById("correo").value));
  docRef.get().then((doc) => {
      
    if (doc.exists) {
          console.log("Document data:", doc.data().tipouser);
          
          if (doc.data().tipouser == "1"){

            usuarioadmitido = true;
            console.log("usuario admitido");

            console.log(email + " "+ password);
            firebase.auth().signInWithEmailAndPassword(email, password)
              .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
              
                location.href = "./principal.html";


                firebase.auth().onAuthStateChanged(function(user) {
                  if (user) {
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    
                   
                
                   
                    

                  } else {
                    console.log("Error");
                  }
                  });

                  const usermostrar = doc.data().nombre || doc.data().Nombre;
                  console.log("Hola" +" "+ usermostrar);
                  localStorage.setItem("usuario", usermostrar);

                  
                })
                .catch((error) => {
                console.log("Error de ingreso");
                var errorCode = error.code;
                var errorMessage = error.message;
                MSJERROR();
              });


          }else{
              usuarioadmitido = false;
              console.log("usuario no admitido");
              location.href="./notienepermiso.html";
          }
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          MSJERROR();
      }
  }).catch((error) => {
    console.log("Error getting document:", error);
  }); 
}





function iniciar(){
  getDocField();
  
}

