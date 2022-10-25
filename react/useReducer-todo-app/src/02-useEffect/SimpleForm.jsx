import { useEffect, useState } from 'react';
import { Message } from './Message';


/* Que hace el hook useEffect ?



*/

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ //Establecemos nuestos valores iniciales del estado
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState; //Desectructuramos las propiedades del estado. 

    const onInputChange = ({ target }) => { 

        const { name, value } = target; //Desectructuramos del target las propiedades del evento, que necesitamos.

        setFormState({ //Usamos el spread operator 
            ...formState, //Mantenemos los datos de nuestro estado, ya que no queremos perderlos.
            [ name ]: value  /*Actualizamos el estado usando las propiedades computadas entre los objetos
                               pasamos primero la propiedad que estableceremos, y el valor sera igual al
                               nuevo value. 

                               tener cuidado al establecer una nueva props por que se va a crear.
                            */
        });
    }


    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);

    

    return (
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


            {
                (username === 'strider2' ) && <Message />
            }

        </>
    )
}
