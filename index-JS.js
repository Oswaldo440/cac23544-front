
let pagar;
let desc;

function captura() {
    let costo = 200
    let Nombre = document.getElementById("InputNomb").value;
    let Apellido = document.getElementById("InputApe").value;
    let Email = document.getElementById("InputEmail").value;
    let Cantidad = document.getElementById("valor1").value;
    if (Cantidad != "1") {  costo = (costo * Cantidad)  }    
    let Categoria = document.getElementById('valor2Categoria').value;
    let Expresion = /\w+@\w+\.+[a-z]{2,10}/;
    let ExpNomb = /\D+[aZ-Za]/;
    let ExpApe = /\D/;
    let ExpCant = /^[0-9]{1,1}$/
    

        if (Nombre==0){
        alert("Indique Nombre");
        document.getElementById("InputNomb").focus();
        Nombre="";
        return false;
        }
        else if(!ExpNomb.test(Nombre)){
            alert("Formato de Nombre Inválido");
            document.getElementById("InputNomb").focus();
            InputNomb="";
            return false;
        }         
        if (Apellido ==0) { 
            alert("Indique Apellido");
            document.getElementById("InputApe").focus(); 
            return false;
        }
        else if(!ExpApe.test(Apellido)){
            alert("Formato de apellido Inválido");
            document.getElementById("InputApe").focus();
            InputApe="";
            return false;
        }    
        if (Email ==0) { 
            alert("Indique Email");
            document.getElementById("InputEmail").focus();
            return false;
        }
        else if(!Expresion.test(Email)){
            alert("Correo no es Válido");
            document.getElementById("InputEmail").focus();
            InputEmail="";
            return false;
        }
        if (Cantidad ==0) {
            alert("Indique Cantidad");
            document.getElementById("valor1").focus();           
            return false;
        }
        else if(!ExpCant.test(Cantidad)){
            alert("Rango no es Válido de(1-9)");
            document.getElementById("valor1").focus();
            valor1="";
            return false;
        }
            if (Categoria ==0){     
            alert("Seleccione una opción");
            document.getElementById("valor2Categoria").focus(); 
            return false;
        }else{    
            if (Categoria == "1") {
                Categoria = "Estudiante"
                desc = (costo * (80/100));
                pagar = (costo - desc)
            }else{
            if (Categoria == "2") {
                Categoria = "Trainnee"
                desc = (costo * (50/100));
                pagar = (costo - desc) 
                
            }else{
            if (Categoria == "3") {
                Categoria = "Junior"
                desc = (costo * (15/100));
                pagar = (costo - desc)     
           
        }
       }
      } 
     }
     
      document.getElementById("inputTotal").innerHTML =`Total a Pagar:$  <b>${pagar}</b> por <b>${Cantidad}</b> ticket para <b>${Categoria}</b>
     con Descuento:$ <b>${desc}</b> a Nombre: <b>${Nombre} ${Apellido}</b> y Correo: <b>${Email}</b>`; 
    
    document.getElementById("InputNomb").value="";
    document.getElementById("InputApe").value="";
    document.getElementById("InputEmail").value="";
    document.getElementById("valor1").value="";
    document.getElementById("valor2Categoria").value="";
    document.getElementById("InputNomb").focus();    
    return false;
    
    
        function reset() {
            if(InputNomb && InputApe && InputEmail && valor1 && valor2Categoria ) {
            formulario.reset();
            document.getElementById("InputNomb").focus();    
           }
        }        
} 



        


