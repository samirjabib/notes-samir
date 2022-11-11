/* ¿Que es Hoisting? 


    Conceptualmente, por ejemplo, una estricta  definicion de hoisting suguiere
    que las declaraciones variables y funciones son fisicamente movidas  al comienzo del codigo,
    pero esto no es lo que en realidad ocurre, lo que sucede es que las variables y funciones
    son asignadas en memoria durante la fase de compilacion, pero quedan exactamente
    donde has escrito el codigo. 



*/


//Ejemplo Hoisting

function nombreDelGato(nombre) {
    console.log("El nombre de mi gato es " + nombre);
  }
  
  nombreDelGato("Maurizzio");
  /*
  El resultado del código es: "El nombre de mi gato es Maurizzio"



  El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:
  */


nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/
