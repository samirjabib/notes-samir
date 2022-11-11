/*
    ¿Que es la Herencia en programacion?. 

        La herencia por clases es uno de los pilares de la programacion orientada a objetos
        este modelo permite que una clase herede los metodos y propiedades definidas en otra 
        clase, asi evitandonos re-escribir codigo.

        Asi funciona en los lenguajes tradicionales.

        Pero en javascript funciona diferente ya que en realidad por detras estamos usando
        prototipos.

        Entonces lo mas acertado es llamarlo DELEGACION DE OBJETOS, ya que en javascript no 
        existen herencias, ahi objetos que le piden acciones a otros objetos. 

    ¿Que son los prototipos?.

    Un prototipo en javascript es como un delegado: alguien a quien le delegamos algo, cierta
    responsabilidad. 

*/


const productor = {
    tipo:'trap',
    cocinar: function(ritmo){
        console.log(`Haciendo ${ritmo}`);
    }
};

const samir = {
    nombre:'samir',
    edad:26,
    profesion:'developer'
};

//Si quisieremos unir estos dos objetos lo podriamos hacer mediante las propiedades

samir.__proto__ = productor; /*La propiedad __proto__ es una propiedad oculta que tienen todos  
                                los objetos, no es muy aconsejable usarlo en una aplicacion real */
                                
Object.setPrototypeOf(samir, productor)  /*´Podemos usar el metodo de los objetos setPrototpyeOf
                                            esta funcion recibe dos parametros, el primero el objeto
                                            al cual queremos modificar y el segundo es el objeto que
                                            queremos que sea el prototipo del primero. 
                                            , no es muy aconsejable usarlo en una aplicacion real */


// samir.cocinar('trap') // Ya podemos usar el metodo del otro objeto.

/* OCULTAMIENTO DE PROPIEDADES

    Ocultar las propiedades o metodos que se encuentran en el mismo prototipo de un bojeto por que repiten
    el mismo nombre.

    const productor = {
    tipo:'urban',
    cocinar: function(ritmo){
        console.log(`Haciendo ${ritmo}`);
    }
};

    const samir = {
        nombre:'samir',
        edad:26,
        profesion:'developer'
        tipo:'javascript'
    };

    samir.tipo // = javascript

    javascript siempre buscara la propiedad en el primer objeto , solo si no lo encuentra
    pasa al siguiente. 


    Cadena de prototipos:

    Object.prototype contiene todo los metodos y propiedades de objetos, este es el prototipo de todos objetos
    cada tipo de dato que no sean primitivos tiene sus propios prototypes

    object.prototype
    array.prototype
    date.prototype
    regexp.prototype
    function.prototype
    
    los prototipos heredan los metodos de el prototipo principal objets.prototype

    La cadena de prototipos se recorre cuando queremos leer una propiedad o ejecutar un metodo, mas no
    cuando estamos asignando una propiedad. 

*/


Object.prototype.__proto__


/* Como saber si un objeto es prototipo de otro 

const productor = {
    tipo:'trap',
    cocinar: function(ritmo){
        console.log(`Haciendo ${ritmo}`);
    }
};

const samir = {
    nombre:'samir',
    edad:26,
    profesion:'developer'
};


*/

samir.__proto__ = productor;

productor.isPrototypeOf(samir)

 /* Maneras de usar prototipos en javascript 

    1. Object Literal
        Javascript mismo se encargara de asignar a cada objeto el prototipo correspondiente. 

    2. Object create
        En la cual le pasamos el protoipo por parametros.

    3. Funciones constructoras y clases.
        
    4. Funciones primitivas para los prototipos.

 */

 // 1. Object Literal
 const obj = { nombre: 'Samir' };
 const numeros = [ 4, 8, 15, 16, 23, 42];
 const sumar = (a, b) =>  a + b ;


 // 1. Object create

 Object.create(proto)

 Object.setPrototypeOf(productor) 

 //3. Funciones constructoras y clases
    function Ing (tipo = 'mezcla'){
        this.tipo = tipo
    }


    Ing.prototype.mezclar = function(cancion){
        console.log(`Mezclando ${cancion}`)
    }

    Ing.prototype.presentarse = function(cancion){
        console.log(`hola, soy un productor especializado en ${this.tipo}`)
    }

    const samir = new Ing();

//4. Ultima forma de usar prototipso funciones basicas (No recomendable )

    samir.__proto__ = productor; /*La propiedad __proto__ es una propiedad oculta que tienen todos  
                                los objetos, no es muy aconsejable usarlo en una aplicacion real */
                                
    Object.setPrototypeOf(samir, productor)  /*´Podemos usar el metodo de los objetos setPrototpyeOf
                                            esta funcion recibe dos parametros, el primero el objeto
                                            al cual queremos modificar y el segundo es el objeto que
                                            queremos que sea el prototipo del primero. 
                                            , no es muy aconsejable usarlo en una aplicacion real */



                                            