const valideRegisterForm = ()=>{
  const $nombre = document.getElementById("nombre").value
    const $apellido = document.getElementById("apellido").value
    const $celular = document.getElementById("celular").value
    const $correo = document.getElementById("correo").value
    const $password = document.getElementById("contraseña").value

    $emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
    $celularRegex = /^\d{7,14}$/;
    $nombreRegex = /^([a-zA-Z])*$/;
    $apellidoRegex = /^([a-zA-Z])*$/;

    if($nombre == "" || $apellido == "" || $celular == "" || $correo == "" || $password == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios!'
      })
    return false;
    }

      if(!$nombreRegex.test($nombre)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El nombre no es válido!'
        })
        return false
      }

      if(!$apellidoRegex.test($apellido)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El apellido no es válido!'
        })
        return false
      }

      if(!$celularRegex.test($celular)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El celular no es válido!'
        })
        return false
      }

      if(!$emailRegex.test($correo)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El correo no es válido!'
        })
        return false
      }

        if(!$passwordRegex.test($password)){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña no es válida!'
          })
          return false
        }

    return true;
}

//---------------------Base de datos---------------------------//

function guardarRegistro(){
  
  var dbcampos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    celular: document.getElementById("celular").value,
    correo: document.getElementById("correo").value,
    password: document.getElementById("contraseña").value,
    tipouser: document.getElementById("tipouser").value
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
  
  const isvalid = valideRegisterForm()
  if(isvalid){
  guardarRegistro();
  funcionauth();
  }
}

