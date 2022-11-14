/* Promesas async - await

     
    Tenemos los async y await para casos donde tenemos muchos then y catch anidados ya que esto nos permite
    trabajar mejor y de manera mas lejible para los humanos las promesas.

    los async - await solo es posible usar dentro de una funcion asincronas, 

    esto es otra forma de escribir las promesas.

    esto tambien nos va a permitir trabajar codigo asincrono de manera asincrona.



*/

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


// const call = async (url) => { //Asinc nos transforma la funcion en una asincrona
//    const response = await request(url); //El objetivo de esto es esperar que se resuelva la promesa para seguir con la ejecucion del codigo, con esto en forma secuencial.
//    const response2 = await request(url);
   
//    const n1 = toNumber(response);
//    const n2 = toNumber(response2);

//    print(n1 * n2);


// }

// call('./number.txt');



const call = async (url) => { //Asinc nos transforma la funcion en una asincrona

    try{ //Podemos usar multiple try catch
        const response = await request(url); //El objetivo de esto es esperar que se resuelva la promesa para seguir con la ejecucion del codigo, con esto en forma secuencial.
        console.log(response)
    } catch (error) {
        console.log(error)
        response = 2;

    }

    try{
        const response2 = await request(url);
        console.log(resposne2)
        
    } catch (error) {
        console.log(error)
        response2 = 7
    }

    const n1 = toNumber(response);
    const n2 = toNumber(response2);
    print(n1 * n2 );
   
 
 }
 
call(url)

const url  = 'number.txt'