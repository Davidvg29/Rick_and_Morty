// aqui validaremos el form del login de email y passwor

export function validation(userData){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // console.log("archivo de validaccion")

    const error = {}

    if(!userData.email){
       error.email="Ingrese caracteres"
    } else if(!regexEmail.test(userData.email)){
        error.email="ingrese un email correcto"
    }else if(userData.email.length>35){
        error.email="email no puede tener mas de 35 caracteres"
    }
    else{error.email=""}

    if(userData.password===""){
        error.password="ingrese password"
    }else if(userData.password.length<6){
        error.password="ingrese mas de 6 caracteres"
    }else if(userData.password.length>10){
        error.password="ingrese hasta 10 caracteres"
    }else{error.password=""}

   return error
}
