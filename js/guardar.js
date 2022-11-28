
    var Validar_Email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;





//---------------------Base de datos---------------------------//

function guardarRegistro(){
  
  var dbcampos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    celular: document.getElementById("celular").value,
    correo: document.getElementById("correo").value,
    password: document.getElementById("contraseña").value
  }
  
  
  db.collection("usuarios").doc((document.getElementById("correo").value)).set(dbcampos)
  .then((docRef) => {
  MSJOK();
})
.catch((error) => {
  MSJERROR();
});
}



function funcionauth() {

  let email = document.getElementById("correo").value;
  let password = document.getElementById("contraseña").value;
  console.log(email);
  console.log(password);

  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log("si sirvo");
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("No sirvo :c");
  });
}


const MSJOK =()=>{
  Swal.fire({
    icon: 'success',
    title: 'Genial',
    text: ' Los datos se introdujeron correctamente',
    showConfirmButton:false,
    footer: '<a class="btn boton-color" href="./index.html">Iniciar sesión</a>'
  })
  
}

const MSJERROR =()=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ha ocurrido un error!'
  })
}


//--------Funcion para ejecutar funciones------------//
function funcionesregistro() {
  validar_registro();
  guardarRegistro();
  funcionauth();
}

