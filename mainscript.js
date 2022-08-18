let producto1= prompt("Ingresa 1er producto");
let producto2= prompt("Ingresa 2do producto");
let producto3= prompt("Ingresa 3er producto");
let producto4= prompt("Ingresa 4to producto");

if ((producto1 !="") && (prodcuto2 !="") && (producto3 !="") && (producto4 !="")){
    let heladera = producto1 + producto2 + producto3 + producto4;
    console.log(heladera);
}else{
    console.log("es necesario cargar todos los productos");
}
