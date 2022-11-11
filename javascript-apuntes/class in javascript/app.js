/* 
    Clases

        ¿Que es una clase?

            una clase en programacion es como un molde que define propiedades y metodos
            van a compartir un grupo de objetos. 

        Clases en javascript

            en Javascript en realidad no existen las clases , o al menos no como en otro lenguaje
            de programacion, existe algo parecido, en un lenguaje basado en prototipos como javascript
            existe un modelo de delegacion de objetos. 

            En javascript una clase y su constructor es el mismo objeto

            Funcion contructura:
                Las funciones constructoras son funciones comunes y corrientes que utilizamos para
                crear instancias de una clase, y nos permiten re-utilizar el codigo de inicializacion
                 de una instancia cada vez que queremos crear una nueva.

                 Las arrow function no se pueden usar como funciones constructoras.

                 



        El operador new : 
        1.El operador new crea un nuevo objeto vacio con el prototipo de la clase.{__proto__:Persona.prototype}
        2.Invoca la funcion constructuora como elel objeto vacio 
        3. Ejectua el cuerpo de la funcion constructora para inicializar los valores en el objeto creado.
        4. Implicitamente retorna el objeto creado. 

        El operador instanceOf;

            con la propiedad instance of podemos erificar si la propiedad prototype de una clase aparece
            en algun lugar de la cadena de prototipos de un objeto.


        Javascript en EMA2015 Rescribio las clases con una sintaxis mas clara y familiar


*/

//Funcion contructura

function Persona(nombre) {

    // this = {nombre :'samir'};

    this.nombre = nombre;

     const obj = {}
    obj.name = this.nombre
};


Persona.prototype.saludar = function(){ //Con esto añadimos un metodo a la el prototipo para poder acceder a el en las instancias.
    console.log(`Hola mi nombre es ${this.nombre}`)
};

const samir = new Persona('samir'); //{nombre: 'Samir'}
const juan = new Persona('juan');
const eliana = new Persona('eliana');

samir.saludar();
juan.saludar();
eliana.saludar();


const response = samir instanceof Persona;

console.log(response)



class Perro { //Nueva manera de escribir el prototipo mas parecida a una clase.
    constructor(nombre){
        this.nombre = nombre;
    };

    saludar = () => {
        console.log(`hola, mi nombre es ${this.nombre}`);
    };
};

const dante = new Perro('dante')
console.log(dante.saludar())