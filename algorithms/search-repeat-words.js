//Buscar y contar cuantas veces se repite una palabra en un arreglo


function searchRepeatWords(string, word){

    const stringInclude = string.toLowerCase().includes(word)
                        //El metodo toLowercase nos convierte todo a minuscula.
                        //El metodo includes nos dice si un arreglo contiene el parametro que le pasamos.

    if(stringInclude === true ){ //Verificamos si contiene la palabra

        const wordsString = string.split(' ') //Almacenamos el string y lo separamos con el metodo
                                            // split para obtener las palabras 

        let count = 0; //Aqui almacenaremos los datos
        
        for(let i = 0; i < wordsString.length; i++){ //Usamos un ciclo for para iterar sobre el arreglo de palabras
            if(wordsString[i].includes(word)){        // En caso de la de incluir la palabra ir sumandola
                count++
            }
        }


        return `${word} have the same word a ${count} times`; //Retornamos el valor

    } else {
        console.log("word don't found")
    }
}


console.log(searchRepeatWords("samir es el mas samir", "samir"))