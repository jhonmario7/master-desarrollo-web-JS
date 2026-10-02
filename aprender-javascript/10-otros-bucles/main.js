// Bucle While


/* 

let contador = 0;

while (condicion) {

    / Si se cumple se ejecuta infinitamente

}

*/


//Ejemplo

let year = 1990;
let objetivo = 2177;
let interferencia = 2117;


while (year <= 2117) {

    console.log("Estamos en el año:" + year);

    if (year === 2117) {
        break;
    }


    year++;
}


// Do while 

/* 
do{
    /Aqui ejecutas el codigo

}while{


}


*/


let numeros = 47;

do{
    console.log(numeros);

    numeros--;


}while(numeros > 0)