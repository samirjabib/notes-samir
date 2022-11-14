
/* La base de una request */


const toNumber = n => Number(n);
const multiply = n => n * 2;
const print = n => console.log(n);


const request = (url) => {
    const req = new XMLHttpRequest();
    req.open('GET', url); //Le indicamos el metodo que queremos ultilizar y seguido la URL a la cual queremos hacer la peticion 

    req.onload = () => { //Nos permite saber el estado de la peticion 
        if(req.status === 200){
            let number = toNumber(req.responseText);
            number = multiply(number);
            print(number);
        } else {
            console.log('error al cargar'); //Nos muestra el error en la funcion.
        }
    };
    req.onerror = () => { //Nos muestra el error en la peticion cuando un dominio no existe 
        console.log('error de red')
    }
    req.send(); //Enviamos la peticion

};

request("./number.txt");


