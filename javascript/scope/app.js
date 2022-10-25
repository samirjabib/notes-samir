/* ¿Que es el Scope en javascript?


    El scope es lo que le  da significado a las varialbes y ademas determina el conjunto de variables
    que podemos acceder desde una linea de codigo. 

    Es un mecanismo que tiene javascript para buscar variables cada vez que la referenciamos,

    Es definido como el contexto actual de ejecuccion, el contexto en el que los valores y las expresiones
    son visibles o pueden ser referenciados. 


    Existen dos tipos de scope

    SCOPE GLOBAL: las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa. 

    SCOPE LOCAL: las variables locales solo se pueden acceder desde una parte de nuestro programa, existen dos tipos 
    de scope local, el scope de funcion y el scope de bloque .

    scope de funcion:
    - accecibles dentro de toda la funcion pero no fuera de la misma.
    -variables declaradas con var.

    scope de bloque:
    -Accesibles dentro de todo el bloque pero no fuera mismo. 


    como buena practica de programacion debemos declarar con el scope 
    mas reducido posible.

    ¿Que es la cadena de scope?

    Es lo que permite que las variables globales se puedan acceder desde cualquier parte del programa
    empezando desde el scope donde fue referenciada llendo hacia afuera en los bloques
    hasta llegar el scope global. 

    ¿Que es el ocultamiento de variables?

    Se produce cuando una variable que esta en un scope mas recudido
    tiene el mismo nombre que otra que esta en un scope superrior siguiend
    su cadena de scopes.


*/