

function invert(text){

    let textReverse = "";  // 1.Creamos una cadena para almacenar el texto revertido
    
    // 2. Con un buble for vamos a iterar de atras hacia delante en el arreglo

    for(let word of text){ // usamos un for of para separar cada objeto iterable en nuestra variable.
        textReverse = word + textReverse //Pasamos cada iteracion del array a la variable y le sumamos esta misma para poscionarlo de arriba para abajo. 
    }

    return textReverse // Retornamos
}


console.log(invert("samir"))

