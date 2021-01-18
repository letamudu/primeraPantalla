var uno = parseInt(document.getElementById ('uno').value);
var dos = parseInt(document.getElementById('dos').value);
var diferencia = parseInt(document.getElementById('diferencia').value);
    


function mostrarResultado(){

    document.getElementById('res').style.display = 'block';
}  
   

function soloNumeros(e){

    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key);
    var numeros='0123456789';
    var especiales = [8,37,39,46];
    var tecla_especial = false;
    
    for(var i in especiales){
        if(key == especiales){
            tecla_especial = true;break;
        }
    }
    if ( numeros.indexOf(tecla)==-1 && !tecla_especial){
        return false;
    }
    
}


function ejecuta(){

    if (document.getElementById ('uno').value == "" || document.getElementById('dos').value == "" || document.getElementById('diferencia').value == "" ){
        alert ("Debe completar todos los campos");
        return;
    }
    var uno = parseInt(document.getElementById ('uno').value);
    var dos = parseInt(document.getElementById('dos').value);
    var diferencia = parseInt(document.getElementById('diferencia').value);
    
   if (uno  >= dos ){

        alert ("Error, el numero inicial no puede ser superior o igual al numero final");
        return;
        
    } else if ( diferencia >= dos ){
        alert("Error, el numero diferencia no puede ser superior o igual al numero  final del rango");

        return;
    }



    for(var i = uno; i<= dos; i += diferencia){
    
            
        document.getElementById('res').value += i.toString() + ',';


    }

     

        mostrarResultado  ();

    document.getElementById("resultado").disabled = true;
                
      
}




// val = 0;

// if(uno ==""){
//     val++;
// }
// if(dos ==""){
//     val++;
// }
// if(diferencia ==""){
//     val++;
// }

// if (val == 0){
//     document.getElementById("resultado").disabled = false;
// }else{
//     document.getElementById("resultado").disabled = true;
    
// }


// }

// document.getElementById("uno").addEventListener("keyup", deshabilitaBtn);
// document.getElementById("dos").addEventListener("keyup", deshabilitaBtn);
// document.getElementById("diferencia").addEventListener("keyup", deshabilitaBtn);
// document.getElementById("resultado").addEventListener("click", () => {
// alert(" Debe llenar todos los campos")
// }); 


// var uno = 2;
// var dos =  30;
// var dif = 2;

// for(var i = uno; i< dos; i += dif){
//     datos.innerHTML += i;}
