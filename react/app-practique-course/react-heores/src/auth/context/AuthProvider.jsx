import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { initialState } from "./inicialState";




const init = () => { //Esta es una funcion que podemos usar para inicializar nuestro estado. 

    const user = JSON.parse(localStorage.getItem('user')); //Con esto seteamos el objeto en local storage para poderlo mantener.


    return {
        logged:!!user, //Si el user existe esto va a estar en true. 
        user, //Devolvemos el usuario. 
    }
}

export const AuthProvider = ({ children }) => { //Creamos un hight order components para crear el proveedor de informacion con el cual vamos a envolver nuestra app.

    const [authState , dispatch ] = useReducer(authReducer, initialState, init); //Creamos un reducer para manejar los estados de los cuales vamos a proveer. 

    const login = (name = '') => { //Creamos una funcion aux login, esta recibira por parametros desde el argumento donde fue invocada, el dato con que vamos a actualizar el payload. 

        const user = { id:1, name} //Creamos un objeto que contenga el valor, ya que ja

        const action = { //Creamos la accion de la funcion la, cual espeficicaremos el tipo y que va a recibir el palyoad de esta. 
            type:types.login, //Asigamos el tipo de accion a llevar a cabo. 
            payload: user//Actualizamos el payload.
            
        }

        dispatch(action) //Despachamos al funcion que vamos a usar. 

    }
    return(
        <AuthContext.Provider value = {{
            ...authState, //Pasamos desectructurado el estado que tendremos para que cualquier otro componete pueda acceder a sus datos. 


            //Methods. 
            login, //Pasamos el login para que cualquier otro componente pueda acceder a esta funcion.
        }}>
            { children }
        </AuthContext.Provider>
    )
}