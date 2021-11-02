const ingresar = document.getElementById("ingresar");

const comenzar = () =>{
    let palabra = prompt("Ingrese 'casa', 'perro', 'mesa' o 'gato'");
    
    if(palabra == null){
        alert('No puede ser null. Vuelva a ingresar la palabra.')
    }else{
        palabra = palabra.toLowerCase();
        switch(palabra){
            case 'casa':{
                alert("home");
                break;
            }
            case 'perro':{
                alert("dog");
                break;
            }
            case 'mesa':{
                alert("table");
                break;
            }
            case 'gato':{
                alert("cat");
                break;
            }
            default:{
                alert("Su palabra no se encuentra. Vuelva a ingresar una de las palabras indicadas");
                break;
            }
        }

    }
}


ingresar.onclick = () => {
    comenzar();
}