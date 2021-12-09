import axios from 'axios'
//constantes
const dataInicial = {
    array : [],
}
//types
const OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO'
//reducer
export default function productosReducer(state = dataInicial , action){
    switch(action.type){
        case OBTENER_PRODUCTOS_EXITO:
            return {...state, array: action.payload}
        default :
            return state
    }
}
//acciones
export const obtenerProductosAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/list/`) 
        dispatch({ 
            type: OBTENER_PRODUCTOS_EXITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}