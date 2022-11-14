/* -----------------Objeto Map-----------------------------

El objeto Map es un diccionario clave-valor donde cualquier tipo puede ser usado como clave. Esta es la principal característica de los mapas y su mayor diferencia con los objetos, 
donde las claves sólo pueden ser cadenas de texto. En los objetos Map cualquier elemento, incluidos los objetos como matrices o funciones, pueden ser claves para localizar valores.

Los Map se utilizan con una sencilla interfaz donde los principales métodos son:

    set( key, value ): añadir una nueva pareja clave-valor
    get( key ): obtener el valor asociado a una clave
    delete( key ): borrar una pareja clave-valor por medio de la clave.
    has( key ): comprobar si hay una determinada clave en el mapa.

*/

//Ejemplod de Map

const  map = new Map();
 
map.set( 'one', 1 );
map.set( 'two', 2 );
map.set( 'three', 3 );
 
console.log( "map.get('two') =", map.get('two') );
 
map.delete('three');
 
console.log( "map.has('three') =", map.has('three') );

// Tenemos que tener en cuenta que las claves se identifican dentro del mapa con igualdad estricta, 
// es decir, igual que con ===. De esta forma, podremos obtener el valor asociado a un objeto sólo 
// si pasamos exactamente ese objeto (no uno con iguales valores) al método get().
	
const obj1 = {
    a: 1,
    b: 2
};
 
const  obj2 = {
    a: 1,
    b: 2
};
 
const objectmap = new Map();
map.set( obj1, 1 );
 
console.log( 'map.has(obj1) = ', map.has(obj1) );    // true
console.log( 'map.has(obj2) = ', map.has(obj2) );    // false


// Para completar esta breve introducción debemos conocer el resto de métodos y propiedades que tienen los objetos Map:

//     size: contiene el número de valores en el mapa.
//     forEach( (value, key, map) => {}, [thisValue] ): recorre todos elementos contenidos en el mapa.
//     values(): devuelve un iterable con los valores del mapa.
//     keys(): devuelve un iterable con las claves del mapa.
//     entries(): devuelve un iterable con matrices [key, value].
//     clear(): elimina todos los valores del mapa.



// También debemos saber que Map se convierte automáticamente en un iterable si es utilizado dentro de un bucle for of
// , ya que se ha definido un método específico que responde al símbolo bien conocido @@iterable.
// Por último, el constructor de Map puede aceptar una matriz -o un interable- con un conjunto de 
// pares clave-valor para inicializar el objeto directamente en su creación.


// Por último, el constructor de Map puede aceptar una matriz -o un interable- 
// con un conjunto de pares clave-valor para inicializar el objeto directamente en su creación.



const myMap = new Map( [ [0, "zero"], [1, "one"], [2, "two"] ] );
 
for (var [key, value] of myMap) {
    console.log(key + " = " + value); 
}
