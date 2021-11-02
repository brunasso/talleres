let sueldo = 0;
let nombre = "";

nombre = "Bruno";
sueldo = 1000;

let datos = document.getElementById("datos");

let aIngresar = `
    <h4>Nombre: ${nombre}</h4> <br>
    <h4>Sueldo: ${sueldo}</h4>
    `


datos.innerHTML = aIngresar;
console.log("Algo")