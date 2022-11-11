/* -----------------Objeto Set----------------------------- 



El objeto Set permite almacenar valores únicos de cualquier tipo, desde valores básicos hasta objetos, con el única limitación de que no pueden estar duplicados.

Cuando se introduce un valor en un objeto Set, se comprueba que no existe ya dentro de los valores almacenados. La comprobación de valores duplicados se realizar por medio de una igualdad estricta, es decir, igual que con ===, 
por lo que no habrá dos referencias al mismo objeto, pero sí podrán almacenarse objetos diferentes con iguales valores en sus propiedades.

Igual que en el caso anterior, los Set se utilizan con una sencilla interfaz donde los principales métodos son:

    add( value ): añadir una nueva pareja clave-valor
    delete( value ): borrar una valor.
    has( value ): comprobar si existe un determinado valor.

Vamos a ver cómo funciona con un sencillo ejemplo:

*/


const obj1 = {
     a: 1,
    b: 2
    };
     
const obj2 = {
    a: 1,
    b: 2
};

 
const map = new Set();
 
map.add( obj1 );
map.add( obj2 );
 
console.log( 'map.has(obj1) = ', map.has(obj1) );
console.log( 'map.has(obj2) = ', map.has(obj2) );


/*
Para completar la interfaz de los objetos Set debemos conocer el resto de métodos y propiedades que tiene:

    size: contiene el número de valores.
    forEach( (value, key, map) => {}, [thisValue] ): para recorrer todos elementos contenidos en el mapa.
    values(): devuelve un iterable con los valores del mapa.
    entries(): devuelve un iterable con matrices [value, value] (es equivalente al mismo método en Map, pero devuelve el valor dos veces).
    clear(): elimina todos los valores del objeto Set.

Al igual que Map, Set se convierte automáticamente en un iterable si es utilizado dentro de un bucle for of, 

ya que se ha definido un método específico que responde al símbolo bien conocido @@iterable y el constructor de Set 

puede aceptar una matriz -o un interable- con valores para inicializar el objeto directamente en su creación.

Es un objeto muy útil para guardar cualquier tipo de dato con la seguridad de que no estará duplicado. Con una 

llamada a .has() podremos comprobar si el elemento ya existe en el objeto y no deberemos preocuparnos si por algún motivo 

intentamos añadir dos veces el mismo valor, ya que el método .add() no lanza ningún error si intentamos introducir un valor ya existente.




*/