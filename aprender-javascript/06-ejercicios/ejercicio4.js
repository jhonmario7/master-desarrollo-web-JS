/*

Ejercicio 4

Tenemos una jirafa en el zoo que pesa 1.120 kilos.
Y le damos de comer 141 kilos de hojas frescas.
¿Cuanto pesa ahora la jirafa?

*/

let jirafa = 1120;

let hojasFrescas = 141;

let pesoTotal = jirafa + hojasFrescas;

let resultado = "La jirafa al comer las Hojas frescas pesara: " + pesoTotal + " Kg";

//Plantillas de template strings:

let resultado2 = `La jirafa al comer las Hojas frescas pesara: ${pesoTotal} Kg`;


console.log(resultado2);

