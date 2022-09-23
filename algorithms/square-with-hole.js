const side = (number) => {
    let side = "";

    for(let i = 0; i < number; i ++ ){ //Iteramos el numero de elementos que tenemos en el array .
        side += "*"; //por cada numero vamos a agregar un asterisco.
    }

    return side; //Retornamos nuestro elemento.
}


const square = ( number ) => {
    let paint = side(number) + "\n"; //Almacenamos el lado de arriba y hacemos un salto de linea  
    let content = "";

    for (let i = 2; i < (number -2); i++){ //Iteramos para rellenar el contenido del cuadrado por los lados de arriba y abajo y crear las filas<>
        content = "*"

        for(let x = 0; x < (number-2); x++){ //Iteramos para crear el contenido del espacio del cuadrado. 
            content += " ";
        }  

        content += "*"

        paint += content +"\n" //Le concatenamos el contenido en cada interaccion para hacer cada fila y un salto de linea para crear la siguiente fila
    }


    paint += side(number); //Le concatenamos al dibujo el lado de abajo

    return paint;
}

console.log(square(15))