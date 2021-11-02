let deptoSeleccionado = prompt("Ingresa un depto de Colombia").toLowerCase();

let departamentos = ["amazonas", "antioquia","arauca","atlantico","bolivar","boyaca","caldas","caqueta","casanare","cauca","cesar","choco","cordoba","cundinamarca","guainia","guaviare","hulia","la guajira","magdalena","meta","nariño","norte de santander","putumayo","quindio","risaralda","san andres y providencia","santander","sucre","tolima","valle del cauca","vaupes","vichada"];

let capitales = ["Leticia", "Medellin","Arauca","Barranquilla","Cartagena de indias","Tunja","Manizales","Florencia","Yopal","Popayán","Valledupar","Quibdó","Montería","Bogotá","Inírida","San José del Guaviare","Neiva","Riohacha","Santa Marta","Villavicencio","San Juan de Pasto" ,"San José de Cúcuta","Mocoa","Armenia","Pereira","San Andrés","Bucaramanga","Sincelejo","Ibagué","Cali","Mitú","Puerto Carreño"];

let contador = 0;
for (const depto in departamentos) {
    contador ++;
    if (deptoSeleccionado == departamentos[depto]) {
        alert(`La capital es: ${capitales[depto]}`)
        contador --;
    }
    if (contador == 32) {
        alert("No hay depto existente. Ingreselo de nuevo y verifique que esté bien escrito. (No utilice tildes) ")
    }
}