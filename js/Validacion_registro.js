/*
//const registro = document.getElementById('formulario_registro');
const inputs = document.querySelectorAll('#formulario_registro input')

const expresiones = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    celular: /^\d{7,14}$/,
    contraseña: /^.{6}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
//--------------------------------------------//
const registro = document.getElementById('formulario_registro');


  function validar_registro() {
    aprovado = false;
    var R_nombre = document.getElementById("nombre").value;
    var R_correo = document.getElementById("correo").value;
    var R_password = document.getElementById("password").value;

    if (R_nombre == "") {
      
      document.getElementById("nombre").style.borderColor = "#FF4000";
      document.getElementById("nombre").value = "";
      aprovado = false;
    } else {
      document.getElementById("nombre").style.borderColor = "#58B200";
      aprovado = true;
    }

    if (R_correo == "") {
      aprovado = false;
      document.getElementById("correo").style.borderColor = "#FF4000";
      document.getElementById("correo").value = "";
    } else {
      aprovado = true;
      document.getElementById("correo").style.borderColor = "#58B200";
    }

    var Validar_Email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!Validar_Email.test(R_correo)) {
      aprovado = false;
      document.getElementById("correo").style.borderColor = "#FF4000";
      document.getElementById("correo").value = "";
    } else {
      aprovado = true;
      document.getElementById("correo").style.borderColor = "#58B200";
    }


    if (R_password == "") {
      aprovado = false;
      document.getElementById("password").style.borderColor = "#FF4000";
      document.getElementById("password").value = "";
    } else {
      aprovado = true;
      document.getElementById("password").style.borderColor = "#58B200";
    }

  }

  formulario-datos.addEventListener('click', (e) => {
    if(R_nombre && R_correo && R_password){        
    }
    else{
        
    }
});
*/
