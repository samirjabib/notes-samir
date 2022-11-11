/* Promesas  - then*/

new Promise( (resolve, reject) => {
    resolve(5);
    reject(new Error());

}) //De esta manera creamos una promesa , esta resive dos parametros resolve, reject

/* La base de una reques -Rescribiendo con Promesas*/


const toNumber = n => Number(n);
const multiply = (n) =>{
    console.log('multiply of', n)
    if( n > 10) throw new Error('error')
    return     n * 2;
} ;
const print = n => console.log(n);



const thenAlt = n => console.log(n)

const  catchandPrint = err => console.log(err)

const request = (url) => { 
    return new Promise((resolve, reject)  => { //creamos la promesa

        const req = new XMLHttpRequest();
        req.open('GET', url); //Le indicamos el metodo que queremos ultilizar y seguido la URL a la cual queremos hacer la peticion 
    
        req.onload = () => { //Nos permite saber el estado de la peticion 
            if(req.status === 200){
                resolve(req.responseText);
            } else {
                reject(new Error('error en la red'))
               //Nos muestra el error en la funcion.
            }
        };
        req.onerror = () => { //Nos muestra el error en la peticion cuando un dominio no existe 
            reject(new Error('error en la red'))
        }
        req.send(); //Enviamos la peticion
    })


};

request("./number.txt",)
    .then(print)
    .catch(catchandPrint)
    .finally( () => { //Esto nos dice que la aplicacion ha terminado, Esto es una sentencia que se va a ejecturar si o si siempre. 
          console.log('esta tarea ha terminado') 
    })
    .catch(catchandPrint)