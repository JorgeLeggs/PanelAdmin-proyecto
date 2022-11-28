const login = document.getElementById('formulario_login')
const inputs = document.querySelectorAll('#formulario_login input')
const expresiones = {
    contraseña: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
 
const campos = {
    correo: false,
    contraseña: false
}
const validar_login = (e) =>{
    switch (e.target.name){
        case "correo_login":
            console.log('funciona')
            validarcampo(expresiones.correo, e.target, 'correo_login');
        break;       
        case "contraseña":
            console.log('funciona')
            validarcampo(expresiones.contraseña, e.target, 'contraseña');
        break;
    }
}
const validarcampo = (expresion, input, campo) =>{
    if(expresion.test( input.value )){
        document.getElementById(`grupo-${campo}`).classList.remove('registro-incorrecto');
        document.querySelector(`#grupo-${campo} .input_error`).classList.remove('input_error-activo')
        campos[campo] = true;
    }
    else{
        
        document.getElementById(`grupo-${campo}`).classList.add('registro-incorrecto');     
        document.querySelector(`#grupo-${campo} .input_error`).classList.add('input_error-activo');  
        campos[campo] = false;    
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validar_login)
    input.addEventListener('blur', validar_login)
})

formulario_login.addEventListener('click', (e) => {
    if(campos.correo && campos.contraseña){        
    }
    else{
        
    }
});