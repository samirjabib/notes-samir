/* Object.create Object.assing

    ¿Que son los metodos estaticos?

        Estas funciones son dos metodos estaticos de la clase object

        Un metodo estatico es una funcion de la clase que no se invoca sobre las instancias, si
        no sobre la clase en si. 

    ¿Que es OBJECT.CREATE()?

    Es un metodo estatico de la clase Object que sirve para crear  un nuevo objeto con el
    prototipo que le pasamos por parametro. 

    este metodo es mucho mas cercano al modelo de herencia por prototipos que tiene JavaScript,
    y es la manera mas simple de crear objetos con cierto prototipo que tiene javascript.


*/


//Object Create

const persona = {
    init: function ( nombre ) {
        this.nombre = nombre;
        return this; // lo usamos para retornar el objeto
    },

    saludar:function(){
        console.log(`hola mi nombre es ${this.nombre}`)
        return this;
    }
};


//Object.create recibe dos parametros,

const samir = Object.create(persona).init('samir'); //Denbemos retornar el objeto con el metodo init. 

samir.saludar();



/* Object.create Object.assing



    ¿Que es OBJECT.ASSING()?

    Es un metodo estatico de la clase object que nos permite asignar las propiedades de uno o varios objetos
    a otro. 

    Este metodo se usa para dos cosas principalmente, Clonar un objeto, fusionar


    

*/


//Clonar un objeto con object assing


const dante = {
    ojos:'azul',
    pelo:'blanco',
    raza:'husky',

}

const messi = {
    ojos:'marron',
    pelo:'cafe',
    raza:'shanuzer'
}

const dieciocho = {
    ojos:'marron',
    pelo:'gris',
    raza:'salchicha mixta'
}

const clon = Object.assign({}, dante);


//Fucionar objetos


const fusion = Object.assign({}, dante, messi, dieciocho); //Los objetos que estan a la derecha van a ir pisando las propiedades de los demas. 


/* 
    Object.assing modifica al objeto destino, ahi que tener cuidado al usarlo.

*/


