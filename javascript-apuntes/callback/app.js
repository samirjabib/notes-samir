/* Que es el asincronismo 

    El asincronismo son llamadas para los que no dependemos de javascript si no, de cosas esas externas, es decir dependemos de nuestro navegador
    o a traves de el servidor si usamos node.


         ¿ Que es un callback ?

            es una funcion que se pasa como parametro a otra funcion, no podemos determinar exactamente cuando tardara en ejecutarse

            setTimeout( () => console.log("Timeout", 3000) ) //Esto es un callback.

            uno de los mayores problemas del asincronismo es que no podemos tener a tiempo cierto cuanto va a demorar en resolverse
            una llamada


*/






//Ejemplo

const simple = ( tarea ) => console.log(tarea);

const pesada = ( tarea ) => {
    console.log(`Empezando ${tarea}...`);
    for(let i = 0 ; i <  100000000 ; i++){
        Math.random() - Math.random() * Math.random()
    }

    console.log(`Tarea ${tarea} terminada`)
}

const tareaSamir = (tarea, callback, tiempo) => {
    console.log(tarea);
    setTimeout(callback, tiempo);
};

const tareas = [
    () => simple('escribir guion'),
    () => tareaSamir(`[samir] hace miniatura`, () => simple('juan revisa mineatura'), 2000),
    () => pesada('grabar video'),
    () => tareaSamir('samir editar video', () => simple('samir revisa video'), 5000)
];

for (const tarea of tareas) tarea();
