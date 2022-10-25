/*  Que son los clousure

    Las funciones anidadas que recuerdan el conjunto de variables a las que podian acceder, 
    por mas que se las invoque desde otro lugar, desde otro scope


    Que es el entorno lexico


    Es un objeto que tienen los contextos de ejecucion donde se almacenan los nombres de las 
    variables que existen detnro de una funcion y los valores actuales que tienen.

     


*/


//El vinculo entre la clausura y la referencia. 

function crearContador () {
    let contador = 0; //La funcion y la variable se encuentran unidas por un vinculo inseparable. 


    return function incrementar(){ //Estamos retornando el vinculo. 
        contador = contador + 1;
        return contador;
    };
}

const contador1= crearContador();
contador1();
contador1();


/*Que es el entorno lexico


Es un objeto que tienen los contextos de ejecucion donde se almacenan los nombres de las 
variables que existen detnro de una funcion y los valores actuales que tienen.

Dentro del mismo entorno lexico las claves son unicas, cuando le agregamos una actualizacion a una variable
esta se hace dentro del entorno lexico donde se encuentra  esta.

La parte donde se guarda esto se llama Registro de entorno (Recordar googlear)


*/


//Ejemplo 1

/* Primer versión con múltiples funciones */

function error(str) {
    console.log(`%c Error: ${str} `, 'background: red; color: white;');
  }
  
  function warning(str) {
    console.log(`%c Warning: ${str} `, 'background: orange; color: white;');
  }
  
  function exito(str) {
    console.log(`%c Éxito: ${str} `, 'background: green; color: white;');
  }
  
  /* Segunda versión con clausuras */
  
  function crearImpresoraDeMensajes(tipo, estilos) {
    return function mensaje(str) {
      console.log(`%c ${tipo}: ${str} `, estilos);
    }
  }

  
  
  const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');
  const warning = crearImpresoraDeMensajes('Warning', 'background: orange; color: white;');
  const exito = crearImpresoraDeMensajes('Éxito', 'background: green; color: white;');
  