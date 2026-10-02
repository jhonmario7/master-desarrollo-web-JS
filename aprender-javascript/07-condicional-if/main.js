
//Condiciona IF


//Si A es igual a B entonces haz algo

// Ejemeplo 1:

let estaLloviendo = true;

if( estaLloviendo === true){
     //Ssi se cumple se ejecuta esto:
     console.log("Me llevo mi paraguas para que no me llueva encima!!");
     
}else{
    //Sino se cumple que me ejecute esto:
    console.log("No me llevo paraguas.");
    
}



//Ejemplo 2:

let quieroCebolla = false;

if(!quieroCebolla){

    console.log("Tu burger no lleva cebolla!!");
    
}else{
    
    console.log("Tu hamburguesa llevara cebolla.");
}

//Ejemplo 3

let nombre = "Joaquin Perrez";
let edad = 15;

if(edad >= 18){
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años y es mayor de edad.");

    if(edad <= 20){
        console.log("Es un adolecente");
        
    }else if(edad >= 70){
        console.log("Es un anciano");
    }else{
        console.log("Es un adulto.");
        
    }
    
}else{
    console.log(`${nombre} que tiene ${edad} años, NO ES MAYOR DE EDAD!!`);
    
    //No es mayor de edad
}


//Ejemplo 4

let buenTiempo = false;

if(!buenTiempo){
   // console.log("Salimos a dar un paseo por fuera de casa");
    console.log("No vamos a ningun sitio, nos quedamos en casa!!");
    
}

// ejemplo 5


let year = 2005;

if( year >= 2000 && year <= 2030){
    console.log("Estamos en la era moderna");
    
}else if(year > 2030){
    console.log("Estamos en la era post moderna.");
    
}else{
    console.log("Estas en la era antigua");
    
}

// Ejemplo 6

if(year == 2007 || year == 2017 || year == 2027 || year == 2037 ){

    console.log("El año acaba en 7!!");
    

}else{
    console.log("Año desconocido.");
    
}