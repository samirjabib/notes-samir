/*

BINDING(ENLAZAMIENTO)

Javascript lo primero que hace es revisar que tipo de enlazamiento
esta haciendo. 

Podemos ver this como un parametro especial que envian las funciones, podemos
verlo como el contexto.

El contexto es el objeto que esta ejecutando una funcion en un momemnto
especifico.


Nuestro objetivo como desarrolladores es usar this para hacer que la funcion que usa this
se enlace con el objeto correcto, para cuando se ejecute lo haga en el contexto que nosotros le indicamos,
si no javascript va a hacerlo por nosotros de manera default y puede llegar a ocasionar errores.

Aqui entra el concepto de enlazamiento(binding) que es asignar el valor que va a tomar this cuando
se ejecute la funcion.

Existen 4 tipos de enlazamiento:

1.Lexical Binding.(Arrow Functions).
2.New Binding.(Instanciar Objetos).
3.Explicit Binding.(Invocacion indirecta).
4.Implicit Binding.(Invocacion de Metodo).
5.Default Binding.(Invocacion directa).

*/

'use strict'


// const dante = {
//     name:'dante',
//     saludar: function(){
//         console.log(`Hola , yo soy:`,this.name)
//     } 
// }



//Errores comunes
// const messi = {
//     name:'messi',
//     saludar: function(){
//         console.log(`Hola , yo soy:`,this.name)
//     } 
// }

// const messiSaludar = messi.saludar; 

// messiSaludar();  Esto es undefined por que en este momento this es el objeto global
//                  Y este no contiene la variable name 

// const harry = {
//     nombre:'harry',
//     saludar:function(){
//         console.log(`click hola me llamo ${this.harry}`);
//     },
// };

// const button = document.getElementById('button');
//     button.addEventListener('click', harry.saludar);
//                                                 //Elemento que dispara el objeto 





/*Default Binding.(Invocacion directa).

Una buena practica es no usar this en las funciones globales
por que este no va a estar definido en el modo estricto de javascript. 
*/

// function quienSoy(){
//     console.log(`Hola yo soy `, this); //This en este caso vendria a ser el objeto global, o window
// }



/*4.Implicit Binding.(Invocacion de Metodo)..

    Este tipo de enlazamiento se suele producir cuando invocamos al metodo de un objeto.

*/

// const samir = {

//     nombre:"samir",
//     instagram:"sanji.jsx",
//     saludar: function(){

//         console.log(`Hola me llamo ${this.nombre}`);

//         function siguemeEnInstagram(){
//             console.log(` sigueme en instagram: ${this.instagram}`)
//         };

//         siguemeEnInstagram()
//     }
// }

// samir.saludar();



/*3.Enlazamiento Explicito.(Invocacion de Metodo)..

    Sirve para que nostoros elijamos que objeto queremos que sea this
    cuando se ejecuta una funcion.

    Basicamente esto nos permite elegir el contexto de forma explicita.

*/

// const samirEnPijama = {
//     nombre:'samir',
//     descipcion:'doble de samir pero en pijama',
//     comer: function( comerConTenedor, pararseEIrAlPc ){
        
//     const usarManos = `hola soy ${this.nombre} y hoy comere con las manos`;
//     const usarTenedor = `hola soy ${this.nombre} y hoy comere con tenedor`
//     const pararseDeLaMesa = 'Gracias por la comida me voy al pc...';

//     const comer = comerConTenedor ? usarTenedor : usarManos;

//     console.log(comer);

//     if(pararseEIrAlPc){
//         console.log(pararseDeLaMesa);
//     };
    
//     },
// }

// samirEnPijama.comer(true, true) //Le pasamos por parametros como verdaderos para invocar el metodo
// const juanEnPijama = {
//     nombre:'juan'
// }
// samirEnPijama.comer.apply(juanEnPijama, [true, true]) //Le enviamos los parametros en forma de array



/*3.Enlazamiento Explicito.(Invocacion de Metodo) */



// const samir = {
//     nombre:'samir',
//     saludar: function(){
//         console.log(`Hola me llamo ${this.nombre}`)
//     }
// }




/*3.NEW BINDING(Instanciar Objetos) */

// function Persona(nombre){
//     this.nombre
// }

// const samir = new Persona('samir'); //  Cuando instanciamos un objeto con new 
//                                     // Tambien producimos un enlaceamiento. 


// Lexical Binding.(Arrow Functions)

const person = {    
    nombre:"samir",
    instagram:"sanji.jsx",
    saludar: function(){

        console.log(`Hola me llamo ${this.nombre}`);

        const  siguemeEnInstagram = () => {
            console.log(` sigueme en instagram: ${this.instagram}`)

        };

        siguemeEnInstagram();
    }

}

console.log(person.saludar());