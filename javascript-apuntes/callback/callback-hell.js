
// const error = ( msg ) =>  console.log(msg)



// const tarea = (tarea, siguiente, error) => {
//     console.log(tarea);
//     if(Math.random() < 0.1) error();
//     else setTimeout(siguiente, 500);
// }


// const pensarIdea  = () =>
//     tarea(
//         'pensando idea', 
//         guionizar, 
//         () =>  error('error al pensar idea')
//     )



// const guionizar = () => 
//     tarea(
//         'guionizar', 
//         grabar,
//         () => error('error al gionizar')
//     )


// const grabar = () => 
//     tarea(
//         "grabar",
//         editar,
//         () => error('error al grabar'),
//     )

// const editar = () => 
//         tarea(
//             'editar', 
//             publicar, 
//             () =>  error('error al editar')
//         )

// const publicar = () => {
//     tarea(
//         "Publicar",
//         () => console.log('publicando'),
//         () =>  error('error al publicar')
//     );
// }

// pensarIdea()


//Esto es a lo que se conoce como callback hell son anidaciones de llamados en funciones que al ser tanta cantidad se vuelve demaciado incomodode ller para la vista del humano. 


const error = ( msg ) =>  console.log(msg)



const tarea = (tarea, siguiente, error) => {
    console.log(tarea);
    if(Math.random() < 0.1) error();
    else setTimeout(siguiente, 500);
}


const pensarIdea  = () =>
    tarea(
        'pensando idea', 
        () =>
            tarea(
                'guionizar', 
                () => 
                tarea(
                    "grabar",
                    () => 
                        tarea(
                            'editar', 
                            () => {
                                tarea(
                                    "Publicar",
                                    () => console.log('publicando'),
                                    () =>  error('error al publicar')
                                );
                            }, 
                            () =>  error('error al editar')
                        ),
                    () => error('error al grabar'),
                ),
                () => error('error al gionizar')
            ),
        () =>  error('error al pensar idea')
    )




pensarIdea()