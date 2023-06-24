
//Exportacion de los arrays 

const {Cocinero, Receta, Preparacion} = require('./arrays');

console.log("Ciclo for");
for (let item = 0; item < Cocinero.length; item++) {
    console.log(`Nombre: ${Cocinero[item].Nombre}\t Sueldo: ${Cocinero[item].SueldoBasico}  \n`);
}

//Ciclo Foreach 

console.log("Ciclo Foreach");

Receta.forEach(element => {
    console.log(`Nombre: ${element.Nombre} \n Ingredientes: \n `);
    element.Ingredientes.forEach(e=>{
        console.log(`- ${e.nombre} \n`)
    });
});


//Do While

console.log(" Ciclo Do While ");
let item = 0
do {
    a =Preparacion[item].idReceta;
    console.log(`Cocinero: ${Cocinero[a-1].Nombre} \n
    Receta: ${Receta[b-1].Nombre} \n
    Hora: ${Preparacion[item].Fecha} \n
    Fecha: ${Preparacion[item].Hora}\n
    Costo: ${Preparacion[item].Costo}\n
    Cantidad de productos a preparar: ${Preparacion[item].CantidadProducto}\n
    Tiempo: ${Preparacion[item].TiempoEstimado} \n`);
    item++;
} while (item <= Preparacion.length-1);
