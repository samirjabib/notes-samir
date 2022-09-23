//Crear un checkeador de palodromos


function palidromeChecker(string) {

    //Almacenamos el nuevo string en una variable

    const stringReverse = string.split("").reverse().join("") 
                        //El metodo split nos separa el array mediante el caracter que le pasemos.
                        //El metodo reverse nos reversa el array.
                        //El metodo join nos une el array de nuevo y lo retorna como un string


    if(stringReverse === string){ //Comparamos mediante un if si son iguales
        return `${stringReverse} is a palidromo`
    }else{
        return `${stringReverse} no is palidromo`
    }
}


console.log(palidromeChecker("samir"))