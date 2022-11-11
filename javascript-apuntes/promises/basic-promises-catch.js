/* Promesas */

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

request("./number.txt",) /* 
                            Los then son funciones parecidas a los return , ya que esta
                            es capaz de guardar nuestra informacion, adicional a esto podemos anidar
                            multiples then para pasar de una operacion a otra el resultado.

                            ahi que tener cuidado con los then es por que lo que iremos operando
                            en cada then es el resultado del anterior then.
                            */
    .then(toNumber)
    .then(multiply)
    .then(print)

    .catch(catchandPrint)  //Con el catch podemos atrapar el error de cualquier them, ahi que tener en cuenta que se va a seguir ejecutando si mas adelante ahi then.
    .then(multiply)  //Este then recibe el resultado del catch.
    .then(print) //Se sigue la cadena
    .catch(catchandPrint) //Se sigue la cadena al haber un then abajo 
    .then(multiply);
            




