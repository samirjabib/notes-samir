import { types } from "../types/types"; //Importamos las acciones a realizar con el reducer
import { initialState } from "./inicialState";

export const authReducer = ( state = initialState, action ) => {
                                    /*Creamos el authReducer recordando que un reducer es una funcion pura qeu recibe
                                    dos parametros, el state y el action, que a su ves contiene el type la accion a realizar, 
                                    y el payload , encargado de replazar el anterior estado por el nuevo      
                                    */

    switch(action.type){

        case types.login: 
                return { //Devolvemos el nuevo estado en caso de que accionemos esta accion 
                ...state,//Le pasamos el state, para mantener el state anterior. 
                logged:true, //Declaramos el estado en true. 
                user:action.payload, //El nuevo estado que devolveremos mediante el payload, en este caso el nombre
            };

        case types.logout:
            return {
                logged:false, //Actualilizmos el nuevo valor del estado.
            };
        
        default:
            return state;
    }
}