const ingresarDatos = document.getElementById("ingresarDatos");
const datos = document.getElementById("datos");

const solicitar = (dato) => {
    let devolucion = prompt( `Ingresa tu ${dato}` )
    console.log(dato + ': ' + devolucion )
    return devolucion
}






const solicitarDatos = () => {

    let nombre = prompt("Ingresa tu Nombre")
    let apellido = prompt("Ingresa tu apellido")
    let edad = prompt("Ingresa tu edad")
    let telefono = prompt("Ingresa tu telefono")
    let celular = prompt("Ingresa tu celular")
    let direccion = prompt("Ingresa tu direccion")


    if(nombre == null || apellido == null || edad == null || telefono == null || celular == null || direccion == null){
        console.log(nombre, apellido, edad, telefono, celular,direccion)
        alert("Ninguno de tus datos puede estar vacío (No le puedes dar en 'cancelar') ")
    }
    
    
    else{

        localStorage.setItem("Nombre", nombre)
        localStorage.setItem("apellido", apellido)
        localStorage.setItem("edad", edad)
        localStorage.setItem("telefono", telefono)
        localStorage.setItem("celular", celular)
        localStorage.setItem("direccion", direccion)

    }
}



ingresarDatos.onclick = () => {
    solicitarDatos();
}