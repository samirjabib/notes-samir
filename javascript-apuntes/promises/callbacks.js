

/* La base de una request -Rescribiendo con callbacks*/


const toNumber = n => Number(n);
const multiply = n => n * 2;
const print = n => console.log(n);

const thenFn = n => {
    let number = toNumber(n);
        number = multiply(number);
        print(number);
}

const thenAlt = n => console.log(n)

const  catchandPrint = err => console.log(err)

const request = (url, then, catchFn) => {
    const req = new XMLHttpRequest();
    req.open('GET', url); //Le indicamos el metodo que queremos ultilizar y seguido la URL a la cual queremos hacer la peticion 

    req.onload = () => { //Nos permite saber el estado de la peticion 
        if(req.status === 200){
            then(req.responseText);
        } else {
            catchFn(new Error('error en la red'))
           //Nos muestra el error en la funcion.
        }
    };
    req.onerror = () => { //Nos muestra el error en la peticion cuando un dominio no existe 
        catchFn(new Error('error en la red'))
    }
    req.send(); //Enviamos la peticion

};

request("./number.txt", thenFn, catchandPrint); //Le pasamos la funcion como callback


