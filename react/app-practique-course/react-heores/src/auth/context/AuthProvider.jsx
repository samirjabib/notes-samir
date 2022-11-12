import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { initialState } from "./inicialState";

export const AuthProvider = ({ chidlren }) => { //Creamos un hight order components para crear el proveedor de informacion con el cual vamos a envolver nuestra app.

    const [authState , dispatch ] = useReducer(authReducer, initialState); //Creamos un reducer para manejar los estados de los cuales vamos a proveer. 


    return(
        <AuthContext.Provider value = {{}}>
            {chidlren}
        </AuthContext.Provider>
    )
}