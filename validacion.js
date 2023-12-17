let Nombre = document.getElementById("nombre").value;
let Apellido = document.getElementById("apellido").value;
let Tema = document.getElementById("tema").value;
let Email = document.getElementById("email").value;
let Coment = document.getElementById("coment").value;

let Expresion = /\w+@\w+\.+[a-z]{2,10}/;
let ExpNomb = /\D+[aZ-Za]/;
let ExpApe = /\D/;



if (Nombre==0){
    alert("Indique Nombre");
    document.getElementById("nombre").focus();
    Nombre="";
    return false;
    }
    else if(!ExpNomb.test(Nombre)){
        alert("Formato de Nombre Inválido");
        document.getElementById("nombre").focus();
        Nombre="";
        return false;
    }         
    if (Apellido ==0) { 
        alert("Indique Apellido");
        document.getElementById("apellido").focus(); 
        return false;
    }
    else if(!ExpApe.test(Apellido)){
        alert("Formato de apellido Inválido");
        document.getElementById("apellido").focus();
        Apellido="";
        return false;
    }
    if (Tema ==0) { 
        alert("Indique Tema");
        document.getElementById("tema").focus(); 
        return false;
    }
    else if(!ExpApe.test(Apellido)){
        alert("Formato de tema Inválido");
        document.getElementById("tema").focus();
        Tema="";
        return false;
    }     
    if (Email ==0) { 
        alert("Indique Email");
        document.getElementById("email").focus();
        return false;
    }
    else if(!Expresion.test(Email)){
        alert("Correo no es Válido");
        document.getElementById("email").focus();
        Email="";
        return false;
    }
    if (Coment ==0) { 
        alert("Indique Comentario");
        document.getElementById("coment").focus();
        return false;
    }